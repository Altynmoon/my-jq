import { Container, styled } from "@mui/material";
import { JobItem } from "../job/JobItem";
import { Search } from "../search-panel/Search";
import { JobsPage } from "./JobsPage";


export function MainPage(){
    return(
        <Container fixed>
            <Search />
            <JobsPage />
        </Container>
    )
}

export default MainPage;

