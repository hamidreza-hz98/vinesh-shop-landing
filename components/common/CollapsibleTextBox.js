"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CollapsibleTextBox({ text, defaultChars = 300 }) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const fullTextRef = useRef(null);
  const previewTextRef = useRef(null);

  const needsTruncation = text.length > defaultChars;
  const previewText = text.slice(0, defaultChars) + (needsTruncation ? "..." : "");

  // Update heights for animation
  useEffect(() => {
    if (fullTextRef.current) {
      setContentHeight(fullTextRef.current.scrollHeight);
    }
  }, [text, expanded]);

  return (
    <div className="w-full relative border rounded-lg bg-muted">
      <motion.div
        initial={false}
        animate={{ height: expanded ? contentHeight : previewTextRef.current?.scrollHeight || "auto" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <pre
          ref={expanded ? fullTextRef : previewTextRef}
          className={`p-4 text-sm text-foreground whitespace-pre-wrap font-sans m-0 ${expanded && 'pb-12'}`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {expanded ? text : previewText}
        </pre>
      </motion.div>

      {needsTruncation && (
        <div className="absolute bottom-2 right-4">
          <Button
            variant="ghost"
            size="sm"
            className="bg-background shadow-lg rounded-2xl px-4 py-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}
