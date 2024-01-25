import { useEffect, useRef } from "react";
import "datatables.net-dt/css/jquery.dataTables.css";
import { useAppSelector } from "../../redux/store/storeHook";
import { RootState } from "../../redux/store/store";
import DataTables, { Config } from "datatables.net-dt";

const DataTable = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const columns = [
    { data: "name", title: "Name" },
    { data: "country", title: "Country" },
    { data: "mobile", title: "Mobile" },
    { data: "sex", title: "Gender" },
    { data: "id", title: "ID" },
  ];
  const { dataArray } = useAppSelector((state: RootState) => state.data);
  const data = dataArray;
  const values = {
    columns,
    data,
  };
  useEffect(() => {
    const dt = new DataTables(tableRef.current!, {
      ...values,
    });
    return () => {
      dt.destroy();
    };
  }, [dataArray]);

  return <table className="" ref={tableRef}></table>;
};

export default DataTable;
