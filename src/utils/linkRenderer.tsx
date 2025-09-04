import Link from "next/link";

interface LinkData {
  text: string;
  href: string;
}

export function renderTextWithLinks(text: string, links?: LinkData[]): React.ReactNode {
  if (!links || links.length === 0) {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  }

  const lines = text.split('\n');
  
  return lines.map((line, lineIndex) => {
    const elements: React.ReactNode[] = [];
    let remainingText = line;
    let elementKey = 0;
    
    // Process each link in the line
    links.forEach((link) => {
      const placeholder = `[${link.text}]`;
      const index = remainingText.indexOf(placeholder);
      
      if (index !== -1) {
        // Add text before the link
        if (index > 0) {
          elements.push(remainingText.substring(0, index));
        }
        
        // Add the link
        const isExternal = link.href.startsWith('http');
        elements.push(
          <Link 
            key={`${lineIndex}-${elementKey++}`}
            href={link.href} 
            className="text-[var(--blue-1)] underline hover:no-underline"
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {link.text}
          </Link>
        );
        
        // Update remaining text
        remainingText = remainingText.substring(index + placeholder.length);
      }
    });
    
    // Add any remaining text
    if (remainingText) {
      elements.push(remainingText);
    }
    
    // If no elements were added, add the original line
    if (elements.length === 0) {
      elements.push(line);
    }
    
    return (
      <span key={lineIndex}>
        {elements}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    );
  });
}