/**
 * Sends a successful response with the given data and status code.
 *
 * @param {any} res - the response object
 * @param {any} data - the data to be sent in the response
 * @param {number} statusCode - the status code for the response (default is 200)
 * @return {any} the response object
 */
export const responseSuccess = (
  res: any,
  data: any,
  statusCode: number = 200,
) => {
  return res.status(statusCode).send({
    data,
  });
};
