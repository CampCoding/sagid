// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // make array of blocked paths
  const blockedPaths = [
    "/cart",
    "/index-2",
    "/index-3",
    "/index-dark",
    "/team",
    "/pricing",
    "/faq",
    "/blog-v-1",
    "/blog-v-2",
    "/blog-details-2",
    "/blog-details-3",
    "/products",
    "/product-details",
    "/cart",
    "/checkout",
  ];

  // Block access to blocked paths
  if (blockedPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/not-available"; // Or '/404' or any fallback
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
