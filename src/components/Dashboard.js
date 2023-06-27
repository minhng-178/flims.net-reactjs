import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editFlimId } from "../redux/action";
import Loading from "./Loading";
import styled from "@emotion/styled";

const TableContainerStyled = styled(TableContainer)`
  & .MuiTableCell-head {
    background-color: #f5f5f5;
    color: #333;
  }

  & .MuiTableCell-body {
    background-color: #fff;
    color: #333;
  }
`;

function Dashboard() {
  const ITEMS_PER_PAGE = 6;
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [flim, setFlim] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const baseURL = `https://6492b384428c3d2035d084cd.mockapi.io/flims`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        const data = await response.json();

        setFlim(data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [baseURL]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(flim.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedFlims = flim.slice(startIndex, endIndex);

  const handleAddFlim = () => {
    naviagte("/add");
  };

  const handleEditFlim = (flimId) => {
    dispatch(editFlimId(flimId));
    naviagte("/edit");
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Container sx={{ my: 5, minHeight: "75vh" }}>
        <Typography align="right">
          <Button
            variant="contained"
            color="success"
            onClick={handleAddFlim}
            sx={{ m: 1 }}
          >
            Add Flim
          </Button>
        </Typography>
        {isLoading ? (
          <Loading />
        ) : (
          isLoaded && (
            <TableContainerStyled component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Image</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Nation</TableCell>
                    <TableCell align="left">Year</TableCell>
                    <TableCell align="left">Genre</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedFlims.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">
                        <Avatar alt={row.title} src={row.image} />
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.nation}</TableCell>
                      <TableCell align="left">{row.year}</TableCell>
                      <TableCell align="left">{row.genre.join(", ")}</TableCell>
                      <TableCell align="left">
                        <IconButton onClick={() => handleEditFlim(row.id)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainerStyled>
          )
        )}

        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <Button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            endIcon={<KeyboardArrowLeftIcon />}
            className="previous-button border"
            color="primary"
            size="large"
          />

          <ButtonGroup>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`page-button ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </Button>
              )
            )}
          </ButtonGroup>
          <Button
            className="next-button border"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            startIcon={<KeyboardArrowRightIcon />}
            color="primary"
            size="large"
          />
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
