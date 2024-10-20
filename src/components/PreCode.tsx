import { useEffect, useRef, useState } from "react";

export function PreCode() {
  const pres = Array.from(document.getElementsByTagName("pre"));
  const ref = useRef<HTMLDivElement>(null);
  const [divRect, setDivRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    setDivRect(ref.current.getBoundingClientRect());
  }, []);

  return (
    <div ref={ref} className="relative z-30">
      {pres.map((pre, index) => {
        const code = pre.innerText;
        const rect = pre.getBoundingClientRect();
        if (!divRect) return <></>;
        return (
          <PreCodeButton key={index} code={code} top={rect.top - divRect.top} />
        );
      })}
    </div>
  );
}

export function PreCodeButton({ code, top }: { code: string; top: number }) {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <button className={"copy-code"} style={{ top }} onClick={onClick}>
      {isCopied ? "コピーしました" : "コピーする"}
    </button>
  );
}
