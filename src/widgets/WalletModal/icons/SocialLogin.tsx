import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";
import TorusWallet from "./TorusWallet";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <>
      <LegacySvg viewBox="0 0 18 18" {...props} width="24px"></LegacySvg>
      <LegacySvg viewBox="0 0 18 18" {...props} width="18px">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm4.86-8.884c0-.359-.031-.703-.091-1.035H9v1.959h2.724a2.329 2.329 0 0 1-1.008 1.526h-.002c-.453.303-1.033.482-1.714.482-1.319 0-2.435-.89-2.833-2.087h-.001a3.046 3.046 0 0 1-.158-.96c0-.333.057-.658.159-.961v-.002C6.566 6.841 7.682 5.951 9 5.951c.743 0 1.41.256 1.935.757l1.452-1.452c-.876-.817-2.022-1.319-3.387-1.319a5.061 5.061 0 0 0-4.524 2.79h.001-.002a5.062 5.062 0 0 0 0 4.548h.001a5.062 5.062 0 0 0 4.524 2.787c1.366 0 2.51-.452 3.348-1.224h.002c.958-.881 1.51-2.18 1.51-3.722Z"
          fill={props.fill}
        />
      </LegacySvg>
      <LegacySvg viewBox="0 0 18 18" {...props} width="18px">
        <path
          d="M18 9.055C18 4.055 13.97 0 9 0S0 4.054 0 9.055C0 13.575 3.29 17.32 7.594 18v-6.327H5.309V9.055h2.285V7.06c0-2.27 1.343-3.524 3.4-3.524.984 0 2.014.177 2.014.177v2.229h-1.135c-1.118 0-1.467.698-1.467 1.414v1.698h2.497l-.4 2.618h-2.097V18C14.71 17.321 18 13.575 18 9.055Z"
          fill={props.fill}
        />
      </LegacySvg>
      <LegacySvg viewBox="0 0 18 18" {...props} width="18px">
        <path
          d="M18 9c0-4.95-4.05-9-9-9S0 3.994 0 9c0 4.95 4.05 9 9 9s9-4.05 9-9ZM4.162 12.206c.17 0 .338.056.45.056.957 0 1.8-.337 2.476-.9-.844 0-1.575-.618-1.857-1.462.113 0 .225.056.394.056s.338 0 .506-.056c-.9-.225-1.575-1.069-1.575-2.081.282.168.563.281.9.281-.506-.394-.9-1.012-.9-1.8 0-.394.113-.731.282-1.069a5.527 5.527 0 0 0 4.106 2.25c-.057-.168-.057-.337-.057-.506 0-1.181.9-2.081 1.97-2.081.562 0 1.068.281 1.462.675.45-.113.9-.282 1.237-.506-.168.506-.45.9-.9 1.125a3.734 3.734 0 0 0 1.125-.338c-.281.394-.619.788-1.012 1.069V7.2c0 2.756-2.025 5.962-5.625 5.962-1.069 0-2.138-.393-2.982-.956Z"
          fill={props.fill}
        />
      </LegacySvg>
      <LegacySvg viewBox="0 0 18 18" {...props} width="18px">
        <path
          d="M0 9c0-4.97 4.025-9 9-9s9 4.03 9 9a9 9 0 0 1-9 9c-4.97 0-9-4.025-9-9Zm7.398 1.547c-.572 0-1.025-.509-1.025-1.09 0-.571.445-1.088 1.025-1.088.572 0 1.026.508 1.026 1.089.004.58-.45 1.089-1.026 1.089Zm3.649 0c-.573 0-1.026-.509-1.026-1.09 0-.571.445-1.088 1.026-1.088.572 0 1.025.508 1.025 1.089.064.572-.445 1.089-1.025 1.089Zm2.627-4.873c-1.412-1.157-2.818-1.026-2.818-1.026l-.127.128c1.729.445 2.627 1.283 2.627 1.283-1.411-.834-3.2-.962-3.911-.962h-.382c-.77 0-2.563.191-3.91.962 0 0 .898-.834 2.627-1.283l-.128-.128s-1.41-.063-2.817 1.026c0 0-1.539 2.754-1.411 5.763 0 0 .962 1.474 3.072 1.474l.635-.835s-1.22-.381-1.728-1.156c0 0 1.474 1.025 3.72 1.088h.381c2.246-.126 3.72-1.088 3.72-1.088-.508.77-1.728 1.156-1.728 1.156l.635.835c2.11-.063 3.072-1.474 3.072-1.474.009-3.009-1.53-5.763-1.53-5.763Z"
          fill={props.fill}
        />
      </LegacySvg>
      <TorusWallet {...props} />
    </>
  );
};

export default Icon;