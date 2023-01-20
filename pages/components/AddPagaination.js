import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const pageSize = 2
function AddPagaination() {
  return (
    <div className="flex justify-center mt-8">
      <Stack spacing={2}>
        <Pagination count={10}/>
      </Stack>
    </div>
  );
}

export default AddPagaination;
