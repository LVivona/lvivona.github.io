// app/api/processImage/route.ts
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder") || "blog";
  const imageName = searchParams.get("image");
  const width = parseInt(searchParams.get("width") || "0");
  const height = parseInt(searchParams.get("height") || "0");
  const crop = searchParams.get("crop") === "true";

  const folderPath = path.join(process.cwd(), "public", folder);

  try {
    if (imageName) {
      // Process single image
      return await processSingleImage(folderPath, imageName, width, height, crop);
    } else {
      // Get all images in the folder
      return await getAllImages(folderPath, width, height, crop);
    }
  } catch (error) {
    console.error("Error processing image(s):", error);
    return NextResponse.json(
      { error: "Failed to process image(s)" },
      { status: 500 }
    );
  }
}

async function processSingleImage(folderPath: string, imageName: string, width: number, height: number, crop: boolean) {
  const imagePath = path.join(folderPath, imageName);
  await fs.access(imagePath); // Check if the file exists

  let sharpInstance = sharp(imagePath);
  if (width > 0 || height > 0) {
    sharpInstance = sharpInstance.resize({
      width: width || undefined,
      height: height || undefined,
      fit: crop ? sharp.fit.cover : sharp.fit.inside,
    });
  }

  const buffer = await sharpInstance.webp().toBuffer();
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'image/webp',
      'Content-Disposition': `inline; filename="${path.parse(imageName).name}.webp"`,
    },
  });
}

async function getAllImages(folderPath: string, width: number, height: number, crop: boolean) {
  const files = await fs.readdir(folderPath);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

  const images = await Promise.all(imageFiles.map(async (file) => {
    const imagePath = path.join(folderPath, file);
    const stats = await fs.stat(imagePath);

    let sharpInstance = sharp(imagePath);
    if (width > 0 || height > 0) {
      sharpInstance = sharpInstance.resize({
        width: width || undefined,
        height: height || undefined,
        fit: crop ? sharp.fit.cover : sharp.fit.inside,
      });
    }

    const buffer = await sharpInstance.webp().toBuffer();
    const base64 = buffer.toString('base64');

    return {
      name: file,
      size: stats.size,
      src: `data:image/webp;base64,${base64}`,
    };
  }));

  return NextResponse.json(images);
}