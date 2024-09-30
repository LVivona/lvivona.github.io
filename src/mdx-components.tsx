import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { MDXComponents } from "mdx/types";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight, themes } from "prism-react-renderer";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import katex from "katex";
import { cn } from "./utils/cn";
// Pre-defined Prism theme for code blocks
const prismTheme = themes.nightOwl;

prismTheme.plain.backgroundColor = "#000000";

// Custom Callout/Alert Box
interface CalloutProps {
  title: string;
  children: React.ReactNode;
}

const CustomCalloutBox: React.FC<CalloutProps> = ({ title, children }) => (
  <Alert
    className="my-4 dark:bg-gray-800 dark:text-white"
    style={{ border: "0px" }}
  >
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{children}</AlertDescription>
  </Alert>
);

const KaTex: React.FC<any> = ({ className = "", children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(children, containerRef.current, {
          output: "mathml",
          throwOnError: false,
        });
      } catch (error) {
        console.error("KaTeX rendering failed:", error);
      }
    }
  }, [children]); // Add dependencies to limit re-renders

  return (
    <span
      ref={containerRef}
      className={cn(className, "dark:text-white text-black")}
      style={{
        height: "100px",
        borderRadius: "8px",
        padding: "0.1rem",
      }}
    />
  );
};

interface CodeBlockProps {
  children?: React.ReactNode; // Make children optional here too
  showLineNumbers?: boolean;
}

const CustomCodeBlock: React.FC<CodeBlockProps> = ({
  children,
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);

  if (typeof children === "string" || children instanceof String) {
    // Split the string and check if the first word is a language
    const words = children.trim().split(" ");
    const possibleLanguage = words[0].toLowerCase();
    const knownLanguages = [
      "javascript",
      "python",
      "html",
      "css",
      "java",
      "c",
      "rust",
    ]; 

    if (possibleLanguage === "katex") {
      const code = words.slice(1).join(" ");
      return <KaTex className="">{code}</KaTex>;
    }

    // If the first word is a known language, treat the rest as code
    if (knownLanguages.includes(possibleLanguage)) {
      const code = words.slice(1).join(" ");
      return (
        <Highlight theme={prismTheme} code={code} language={possibleLanguage}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <code className="inline-code text-xs border-[1px] px-2 p-1 rounded-lg">
              {tokens[0].map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </code>
          )}
        </Highlight>
      );
    } else {
      return (
        <span className="p-1 px-2 rounded-lg border-[1px] border-white text-sm">
          {children}
        </span>
      );
    }
  }

  const language = (children as any).props.className
    ? (children as any).props.className.replace(/language-/, "")
    : "javascript";

  if (language === "katex") {
    return (
      <KaTex className="flex justify-center items-center">
        {(children as any).props.children}
      </KaTex>
    );
  }

  const code = (children as any).props.children.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Highlight theme={prismTheme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Card
          className="dark:bg-gray-900 relative"
          style={{
            background: prismTheme.plain.backgroundColor,
            paddingTop: "1.2rem",
          }}
        >
          <button
            onClick={handleCopy}
            className="text-white px-2 py-1 text-xs rounded-md hover:bg-gray-600 focus:outline-none z-20 shadow-lg"
            style={{
              background: "rgba(24 24 27, 0.6)",
              position: "absolute",
              right: "2px",
              top: "2px",
            }}
          >
            {copied ? (
              <Check width={15} height={15} />
            ) : (
              <Copy width={15} height={15} />
            )}
          </button>
          <CardContent className="dark:bg-gray-800">
            <pre
              className={`${className} rounded overflow-x-auto text-xs`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {showLineNumbers && (
                    <span
                      style={{
                        color: "white",
                        opacity: "60%",
                        paddingRight: "10px",
                      }}
                    >
                      {i + 1}{" "}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </CardContent>
        </Card>
      )}
    </Highlight>
  );
};

// Custom Image Component
interface ImageSectionProps {
  src: string;
  className? : string
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
}


const CustomImageSection: React.FC<ImageSectionProps> = ({
  src,
  className="",
  alt,
  caption,
  width,
  height,
  priority,
}) => (
  <div className={cn(className,"flex flex-col items-center my-8")}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="max-w-full h-auto rounded-lg shadow-md"
      priority={priority}
    />
    {caption && (
      <p
        className="mt-2 text-xs dark:text-white opacity-95 text-gray-400"
        style={{ padding: "10px" }}
      >
        {caption}
      </p>
    )}
  </div>
);

interface ContainerProps {
  children: React.ReactNode;
}

const CustomContainer: React.FC<ContainerProps> = ({ children }) => {
  const linkElements: React.ReactNode[] = [];

  // Iterate over the children and extract <a> elements from the grandchildren
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      React.Children.forEach(child.props.children, (grandchild) => {
        // Collect <a> elements from grandchildren
        if (React.isValidElement(grandchild) && typeof grandchild.type === 'string' && grandchild.type === 'a') {
          linkElements.push(grandchild); // Collect the <a> tag
        }
      });
    }
  });

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-8 dark:bg-gray-900">
      {children} {/* Render children unchanged */}
      {linkElements.length > 0 && (
        <div className="text-xs mt-4 dark:text-white text-black" style={{ padding: "0px 30px" }}>
          <ol>
          {linkElements.map((link, i) => {
              // Ensure link is defined before cloning and accessing props
              if (React.isValidElement(link)) {
                return (
                  <li key={i} className="text-blue-500">
                    {React.cloneElement(link)} {link.props.href || "undefined"}
                  </li>
                );
              }
              return null; // If link is not a valid element, return null
            })}
          </ol>
        </div>
      )}
    </div>
  );
};



const CustomMDXComponentMap: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4 dark:text-white dark:border-gray-700">
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => (
    <p
      className="leading-7 [&:not(:first-child)]:mt-6 dark:text-gray-300"
      style={{ margin: "1rem" }}
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a className="hover:underline text-xs" style={{ color: "#3784ff" }} {...props}>
      {children}
    </a>
  ),
  Callout: CustomCalloutBox,
  pre: CustomCodeBlock,
  code: CustomCodeBlock,
  KaTeX: KaTex,
  Container: CustomContainer,
  Image: CustomImageSection,
  Signed : ({ date }) => (
    <div className="text-xs &:not(:first-child)]:mt-6 dark:text-gray-300 flex flex-col text-left sm:text-center sm:ml-0 ml-2">
      <span>{date}</span>
    </div>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...CustomMDXComponentMap,
    ...components,
  };
}
