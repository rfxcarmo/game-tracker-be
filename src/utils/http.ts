export const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch((error) => handleError(res, error));
};

const handleError = (res: any, error: any) => {
    res.status(500).json({ error: "An unknown error occurred" });
};

