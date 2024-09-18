import React, { useState } from "react";
import { useZxing } from "react-zxing";
import {
  BarcodeFormat,
  BrowserMultiFormatReader,
  DecodeHintType,
} from "@zxing/library";

const BarcodeScanner = () => {
  const [result, setResult] = useState("");
  const [showVideoFeed, setShowVideoFeed] = useState(true);
  const formats = [BarcodeFormat.EAN_13, BarcodeFormat.EAN_8];
  const hints = new Map([[DecodeHintType.enabledFormats, formats]]);
  const { ref } = useZxing({
    async onDecodeResult(res) {
      const codeReader = new BrowserMultiFormatReader(hints);
      codeReader.timeBetweenDecodingAttempts = 300;
      const decodeResult = await codeReader.decodeFromVideo;
      setResult(decodeResult.getText());
      setShowVideoFeed(false); // Hide the video feed once a result is decoded
    },
  });

  return (
    <>
      {showVideoFeed && (
        <video
          ref={ref}
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "100%",
            maxHeight: "250px",
          }}
        />
      )}
      {/* Render video feed only if showVideoFeed is true */}
      {!showVideoFeed && (
        <p>
          <span>ISBN:</span>
          <span>{result}</span>
        </p>
      )}
    </>
  );
};

export { BarcodeScanner };
