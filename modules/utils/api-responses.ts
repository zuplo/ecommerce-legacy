// /**
//  * @internal
//  */
// export type SystemResponse = {
//   readonly code: string;
//   readonly help_url: string;
//   readonly message: string;
// };

import { ResponseFactory, SystemResponse } from "@zuplo/runtime";

const NOT_FOUND: SystemResponse = {
  code: "USER_CREATE_FAILED",
  help_url: "https://go.zuplo.com?code=USER_CREATE_FAILED",
  message: "The user could not be created",
};

/**
 * @internal
 */
export const ApiResponses = {
  NOT_FOUND,
};

export class ApiResponseFactory {
  static requiredBodyParameter(name: string): Response {
    return ResponseFactory.badRequest({
      code: "REQUIRED_BODY_PARAMETER",
      help_url: "https://go.zuplo.com?code=REQUIRED_BODY_PARAMETER",
      message: `A value is required for body parameter '${name}'`,
    });
  }
  static requiredQueryParameter(name: string): Response {
    return ResponseFactory.badRequest({
      code: "REQUIRED_QUERY_PARAMETER",
      help_url: "https://go.zuplo.com?code=REQUIRED_QUERY_PARAMETER",
      message: `A value is required for query parameter '${name}'`,
    });
  }
  static formattedResponse(data: unknown): Response {
    return new Response(JSON.stringify(data, undefined, 2), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
