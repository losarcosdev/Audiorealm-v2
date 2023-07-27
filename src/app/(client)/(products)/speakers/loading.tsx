import {
  Skeleton,
  Card,
  CardHeader,
  CardContent,
  Shell,
  Icons,
} from "@/components";

const ProductsLoading = () => {
  return (
    <>
      <div className="bg-zinc-900 h-[10vh] flex items-center justify-center sticky top-0 z-50">
        <div className="h-7 w-80 rounded-md bg-white/10 animate-bg-color" />
      </div>
      <Shell>
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto w-[100%] justify-center items-center gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="rounded-sm shadow-none">
                <CardHeader className="border-b p-0">
                  <Skeleton className="h-80 w-full rounded-none">
                    <div className="flex h-full items-center justify-center bg-secondary">
                      <Icons.placeholder
                        className="h-9 w-9 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  </Skeleton>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-3 mt-4">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Shell>
    </>
  );
};

export default ProductsLoading;
