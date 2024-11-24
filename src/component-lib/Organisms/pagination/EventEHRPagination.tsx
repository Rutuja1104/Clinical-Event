import { useEffect, useState } from "react";
import { BUTTON_VARIANTS } from "../../Molecules/button/constants";
import Button from "../../Molecules/button/Button";
import useDeviceType from "../../../custom-hooks/DeviceType";

interface PaginationProps {
  totalCount?: number;
  page?: number;
  onPageChangeCb: (page: number) => void;
  limit?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount = 10,
  page = 1,
  onPageChangeCb,
  limit = 10,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const totalPages = Math.ceil(totalCount / limit);
  const deviceType = useDeviceType();

  useEffect(() => {
    onPageChangeCb(currentPage);
  }, [currentPage, onPageChangeCb]);

  const renderPages = () => {
    const maxPagesToShow = 5;
    const pages = [];

    if (totalPages <= maxPagesToShow) {
      // If total pages is less than max pages to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <li key={`pagination-page-${i}`}>
            <Button
              onClickCb={() => setCurrentPage(i)}
              variant={
                i === currentPage
                  ? BUTTON_VARIANTS.CONTAINED
                  : BUTTON_VARIANTS.TEXT
              }
              label={String(i)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 8px",
                height: "28px",
                minWidth: "34px",
              }}
            />
          </li>
        );
      }
    } else {
      // Display the first few and last few pages with ellipses in between
      pages.push(
        <li key="page-1">
          <Button
            onClickCb={() => setCurrentPage(1)}
            variant={
              1 === currentPage
                ? BUTTON_VARIANTS.CONTAINED
                : BUTTON_VARIANTS.TEXT
            }
            label="1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 8px",
              height: "28px",
              minWidth: "34px",
            }}
          />
        </li>
      );

      if (currentPage > 3) {
        pages.push(<li key="ellipsis-start">...</li>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <li key={`pagination-page-${i}`}>
            <Button
              onClickCb={() => setCurrentPage(i)}
              variant={
                i === currentPage
                  ? BUTTON_VARIANTS.CONTAINED
                  : BUTTON_VARIANTS.TEXT
              }
              label={String(i)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 8px",
                height: "28px",
                minWidth: "34px",
              }}
            />
          </li>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(<li key="ellipsis-end">...</li>);
      }

      pages.push(
        <li key={`pagination-page-${totalPages}`}>
          <Button
            onClickCb={() => setCurrentPage(totalPages)}
            variant={
              totalPages === currentPage
                ? BUTTON_VARIANTS.CONTAINED
                : BUTTON_VARIANTS.TEXT
            }
            label={String(totalPages)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 8px",
              height: "28px",
              minWidth: "34px",
            }}
          />
        </li>
      );
    }

    return pages;
  };

  return (
    <div
      className={`my-2 flex ${deviceType === "mobile" ? "justify-end" : "justify-between"} items-center`}
    >
      {deviceType !== "mobile" && (
        <div className="text-gray-500 text-sm font-medium">
          Showing {(currentPage - 1) * limit + 1} to{" "}
          {Math.min(currentPage * limit, totalCount)} of {totalCount}
        </div>
      )}
      <nav className="">
        <ul className="flex text-sm justify-between gap-[10px]">
          <li>
            <Button
              onClickCb={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              variant={BUTTON_VARIANTS.TEXT}
              label={"Previous"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 12px",
                height: "28px",
                backgroundColor: "white",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                ...(currentPage === 1
                  ? { color: "#6b7280", cursor: "not-allowed" }
                  : {}),
              }}
            />
          </li>
          {renderPages()}
          <li>
            <Button
              onClickCb={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              variant={BUTTON_VARIANTS.TEXT}
              label="Next"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 12px",
                height: "28px",
                backgroundColor: "white",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                ...(currentPage === totalPages
                  ? { color: "#6b7280", cursor: "not-allowed" }
                  : {}),
              }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
