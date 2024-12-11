import { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { paginationMeta } from "@/types/blog";

interface PaginationSectionProps extends paginationMeta {
  onChangePage: (page: number) => void;
}

const PaginationSection: FC<PaginationSectionProps> = ({
  page,
  take,
  total,
  onChangePage,
}) => {
  const totalPages = Math.ceil(total / take);

  const handlePrev = () => {
    if (page > 1) {
      onChangePage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      onChangePage(page + 1);
    }
  };

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="cursor-pointer" onClick={handlePrev} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" className="font-bold">
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext className="cursor-pointer" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
