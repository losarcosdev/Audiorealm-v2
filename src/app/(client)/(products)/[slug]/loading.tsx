import { Skeleton, Icons, Shell } from "@/components";

const ProductLoading = () => {
  return (
    <Shell className="container p-9">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <Skeleton className="h-[450px] w-full rounded-sm">
          <div className="flex h-full items-center justify-center bg-secondary">
            <Icons.placeholder
              className="h-9 w-9 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </Skeleton>
        <div className="flex flex-col w-full gap-5">
          <Skeleton className="h-11 w-full rounded-sm">
            <div className="flex h-full items-center justify-center bg-secondary"></div>
          </Skeleton>
          <Skeleton className="h-20 w-full rounded-sm">
            <div className="flex h-full items-center justify-center bg-secondary"></div>
          </Skeleton>
          <Skeleton className="h-7 w-12 rounded-sm">
            <div className="flex h-full items-center justify-center bg-secondary"></div>
          </Skeleton>
          <Skeleton className="h-16 w-24 rounded-sm">
            <div className="flex h-full items-center justify-center bg-secondary"></div>
          </Skeleton>
        </div>
      </div>
    </Shell>
  );
};

export default ProductLoading;
