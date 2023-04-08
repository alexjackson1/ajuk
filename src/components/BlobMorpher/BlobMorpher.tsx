import * as React from "react";
import { DEFAULT_PATHS } from "./paths";
import useMorphing from "./useMorphing";

interface BlobPathProps extends React.SVGProps<SVGPathElement> {
  morphId: number;
  hidden?: boolean;
}

export const BlobPath: React.FC<BlobPathProps> = ({
  morphId,
  hidden,
  ...rest
}) => {
  return (
    <path
      id={`blob_${morphId}`}
      className="blobs"
      style={{ visibility: hidden ? "hidden" : "visible", transition: "" }}
      fill="url(#sw-gradient)"
      width="100%"
      height="100%"
      transform="translate(0, 0)"
      strokeWidth="0"
      stroke="url(#sw-gradient)"
      {...rest}
    ></path>
  );
};

type BlobMorpherProps = React.SVGProps<SVGSVGElement>;
const BlobMorpher: React.FC<BlobMorpherProps> = (props) => {
  useMorphing(DEFAULT_PATHS, "blob_0");

  return (
    <svg
      id="blob-morph-svg"
      viewBox="-50 -50 100 100"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      {...props}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor="rgba(55.15, 156.15, 118.636, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor="rgba(0, 235.837, 148.24, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      {DEFAULT_PATHS.map((path, i) => (
        <BlobPath key={i} morphId={i} d={path} hidden={i !== 0} />
      ))}
    </svg>
  );
};

export default BlobMorpher;
