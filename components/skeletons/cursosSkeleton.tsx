import { Skeleton } from "../ui/skeleton";


export function CursosSkeleton(){
    return(
        <div className="flex w-full justify-center">
            <div className="flex flex-col space-y-3 px-24 py-20">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-gray-100" />
                <Skeleton className="h-4 w-[200px] bg-gray-100" />
            </div>
            </div>

            <div className="flex flex-col space-y-3 px-24 py-20">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-gray-100" />
                <Skeleton className="h-4 w-[200px] bg-gray-100" />
            </div>
            </div>

            <div className="flex flex-col space-y-3 px-24 py-20">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-gray-100" />
                <Skeleton className="h-4 w-[200px] bg-gray-100" />
            </div>
            </div>

            
        </div>
        
    )
}