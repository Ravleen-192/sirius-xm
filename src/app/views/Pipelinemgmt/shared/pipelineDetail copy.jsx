import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(15),
  flexBasis: "33.33%",
  flexShrink: 0,
}));

const SecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(15),
  color: theme.palette.text.secondary,
}));

export default function ControlledExpansionPanels(product, productid) {
  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box width="100%">
       {product.productList.product.map((step, index) => {
        console.log("step")
        console.log(step)
      return (<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary
          id="panel1bh-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <Heading>{step.id} </Heading>
          <SecondaryHeading>{step.desc}</SecondaryHeading>
        </AccordionSummary>

        {step.steps.map((st, index) => {
        console.log("st")
        console.log(st)
      return (<AccordionDetails>
           <Typography>
            {st.id}
          </Typography>
         
        </AccordionDetails>);
      
    })}
        </Accordion>);
      
    })}
       
       
    </Box>
       
  );
}
