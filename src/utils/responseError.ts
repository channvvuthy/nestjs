/**
 * Sends an error response with the specified message and status code.
 *
 * @param {any} res - the response object
 * @param {any} message - the error message or object
 * @param {number} statusCode - the status code for the response (default is 400)
 * @return {any} the response object
 */
export const responseError = (
  res: any,
  message: any,
  statusCode: number = 400,
) => {
  const objMsg = typeof message === 'string' ? { message } : message;

  return res.status(statusCode).send({
    error: true,
    status: statusCode,
    ...objMsg,
    message: objMsg.message || 'Unexpected error occurs.',
  });
};
