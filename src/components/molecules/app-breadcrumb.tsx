"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";
import { Link, useLocation } from "@tanstack/react-router";
import { Fragment, useMemo } from "react";

export function AppBreadcrumb() {
  const { pathname } = useLocation();
  const segments = useMemo(() => {
    let url = "";
    return pathname
      ?.split("/")
      ?.slice(1)
      ?.map((segment) => {
        url += `/${segment}`;
        const title = segment
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");
        return { title, url };
      });
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments?.map(({ title, url }, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                <BreadcrumbPage>{title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={url}>{title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
