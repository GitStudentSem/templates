import type { Request } from "express";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type RequestWithBody<B> = Request<{}, {}, B>;

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type RequestWithQuery<Q> = Request<{}, {}, {}, Q>;

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type RequestWithParamsAndBody<P, B> = Request<P, {}, B>;

export type RequestWithParams<P> = Request<P>;

export type ErrorType = { message: string };
