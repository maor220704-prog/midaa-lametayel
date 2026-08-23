/**
 * Compatibility shim. The real content lives in ./cities/<cityId>.ts;
 * ./cities/index.ts assembles it. Pages that only need the city list keep
 * importing "../data/cities" unchanged.
 */
export { cities } from "./cities/index";
