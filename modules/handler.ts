import { ResponseFactory, ZuploContext, ZuploRequest } from "@zuplo/runtime";
import products from "./products.json";
import users from "./users.json";
import transactions from "./transactions.json";

import { ApiResponses, ApiResponseFactory } from "./utils/api-responses";

const data = {
  products,
  users,
  transactions,
};

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { type, id } = request.query;

  if (!type && !data[type]) {
    return ResponseFactory.notFound(ApiResponses.NOT_FOUND);
  }

  if(!id) { 
    return ApiResponseFactory.formattedResponse(data[type]);
  }

  const result = data[type].find(({ id }) => id.toString() === request.query.id);
  if (!result) {
    return ResponseFactory.notFound(ApiResponses.NOT_FOUND);
  }
  return ApiResponseFactory.formattedResponse(result);
}
