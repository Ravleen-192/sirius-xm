import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import React from 'react';
import {useState} from 'react';
import PipelineDetail from './pipelineDetail';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const Pipelinetable = () => {
  const [prodsel, setprodsel] = useState('');
  const [prod, setprod] = useState([]);
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;
  const showDetail = (product,productid) => {
    console.log("product", product);
    if(prodsel==='')
    {setprodsel({productid});
    setprod({product});}
    else
    {setprodsel('');
    setprod({});}
    };
  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <Box overflow="auto">
        <ProductTable>
         
          <TableBody>
          {productList.map((product, index) => {
            console.log(product)
            return <TableRow key={product.id} hover>
              <TableCell key={product.id} align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                      {product.id}
                    </TableCell>
                 {product.processes.map((process, index) => {
                  console.log("process")
                  console.log(process)
                        return (<><TableCell key={process.id} align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                        <Avatar src={product.processes[index].icon} />
                        </TableCell>
    
                        <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                          <Box display="flex" alignItems="left">
                            
                            <Paragraph>{product.processes[index].desc}</Paragraph>
                            
                          </Box>
                        </TableCell>
    
                        <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                        <Avatar src={product.processes[index].status} />
                        </TableCell>
                        </>
                        );
                   })}
                   
                   <TableCell sx={{ px: 0 }} colSpan={1}>
                      <IconButton onClick={() =>showDetail(product.processes, product.id)}>
                        <Icon color="primary">expand_more</Icon>
                      </IconButton>
                    </TableCell>
              </TableRow>;
          })}
           
          </TableBody>
        </ProductTable>
      </Box>
      {
  
        (prodsel !== '')?
        <Box>
        <PipelineDetail productList={prod} productid = {prodsel}/></Box>:null
        
      }
    </Card>
  );
};




const productList = [
 { 
  "id": "#4933",
  "processes": [
    {
      "id": "#4933p1",
      "status":"/assets/images/awsicons/greenarr.jpg",
      "icon":"/assets/images/awsicons/Onprem.png",
      "desc": "On-prem to S3",
      "steps": [
                 
            { "id": "#4933p1s1", "name": "AgglomerativeCluster", "desc": 3938, "icon":"/assets/images/awsicons/Onprem.png", },
            { "id": "#4933p1s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/Onprem.png", },
            { "id": "#4933p1s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/Onprem.png", },
            { "id": "#4933p1s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/Onprem.png", }
          ],
      },
      {
        "id": "#4933p2",
        "status":"/assets/images/awsicons/redarr.jpg",
        "icon":"/assets/images/awsicons/s3.png",
        "desc": "S3 to Redshift source raw",
        "steps": [
                   
          { "id": "#4933p2s1", "name": "AgglomerativeCluster", "desc": 3938,"icon":"/assets/images/awsicons/s3.png" },
          { "id": "#4933p2s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/s3.png" },
          { "id": "#4933p2s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/s3.png" },
          { "id": "#4933p2s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/s3.png" }
            ],
        },
        {
          "id": "#4933p3",
          "status":"/assets/images/awsicons/greenarr.jpg",
          "icon":"/assets/images/awsicons/redshift.png",
          "desc": "Redshift to Curated",
          "steps": [
                     
            { "id": "#4933p3s1", "name": "AgglomerativeCluster", "desc": 3938,"icon":"/assets/images/awsicons/redshift.png" },
            { "id": "#4933p3s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/redshift.png"" },
            { "id": "#4933p3s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/redshift.png"" },
            { "id": "#4933p3s4", "name": "MergeEdge", "desc": 743, "icon":"/assets/images/awsicons/redshift.png" }
              ],
          },
          {
            "id": "#4933p4",
            "status":"/assets/images/awsicons/greenarr.jpg",
            "icon":"/assets/images/awsicons/Analytics.png",
            "desc": "Curated to Q-Analytics",
            "steps": [
                       
              { "id": "#4933p4s1", "name": "AgglomerativeCluster", "desc": 3938,"icon":"/assets/images/awsicons/Analytics.png", },
              { "id": "#4933p4s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/Analytics.png", },
              { "id": "#4933p4s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/Analytics.png", },
              { "id": "#4933p4s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/Analytics.png", }
                ],
            },
        
      ]
    },
    { 
      "id": "#3911",
      "processes": [
        {
          "id": "#3911p1",
          "status":"/assets/images/awsicons/greenarr.jpg",
          "icon":"/assets/images/awsicons/Onprem.png",
          "desc": "On-prem to S3",
          "steps": [
                     
            { "id": "#3911p1s1", "name": "AgglomerativeCluster", "desc": 3938, "icon":"/assets/images/awsicons/Onprem.png", },
            { "id": "#3911p1s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/Onprem.png", },
            { "id": "#3911p1s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/Onprem.png", },
            { "id": "#3911p1s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/Onprem.png", }
          
              ],
          },
          {
            "id": "#3911p2",
            "status":"/assets/images/awsicons/redarr.jpg",
            "icon":"/assets/images/awsicons/s3.png",
            "desc": "S3 to Redshift source raw",
            "steps": [
                       
              { "id": "#3911p1s1", "name": "AgglomerativeCluster", "desc": 3938, "icon":"/assets/images/awsicons/Onprem.png", },
              { "id": "#3911p1s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/Onprem.png", },
              { "id": "#3911p1s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/Onprem.png", },
              { "id": "#3911p1s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/Onprem.png", }
            
                ],
            },
            {
              "id": "#3911p3",
              "status":"/assets/images/awsicons/greenarr.jpg",
              "icon":"/assets/images/awsicons/redshift.png",
              "desc": "Redshift to Curated",
              "steps": [
                         
                { "id": "#3911p1s1", "name": "AgglomerativeCluster", "desc": 3938, "icon":"/assets/images/awsicons/Onprem.png", },
                { "id": "#3911p1s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/Onprem.png", },
                { "id": "#3911p1s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/Onprem.png", },
                { "id": "#3911p1s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/Onprem.png", }
              
                  ],
              },
              {
                "id": "#3911p4",
                "status":"/assets/images/awsicons/greenarr.jpg",
                "icon":"/assets/images/awsicons/Analytics.png",
                "desc": "Curated to Q-Analytics",
                "steps": [
                           
                  { "id": "#3911p1s1", "name": "AgglomerativeCluster", "desc": 3938, "icon":"/assets/images/awsicons/Onprem.png", },
                  { "id": "#3911p1s2", "name": "CommunityStructure", "desc": 3812,"icon":"/assets/images/awsicons/Onprem.png", },
                  { "id": "#3911p1s3", "name": "HierarchicalCluster", "desc": 6714,"icon":"/assets/images/awsicons/Onprem.png", },
                  { "id": "#3911p1s4", "name": "MergeEdge", "desc": 743,"icon":"/assets/images/awsicons/Onprem.png", }
                
                    ],
                },
            
          ]
        },
   
   
];
/*
 [ {
    id:'#4933',
    imgUrl: '/assets/images/awsicons/Onprem.png',
    process1: 'On-prem to S3',
    rarrUrl:'/assets/images/awsicons/redarr.jpg',
    imgUrl1: '/assets/images/awsicons/s3.png',
    process2: 'S3 to Redshift source-raw',
    garrUrl: '/assets/images/awsicons/greenarr.jpg',
    imgUrl2: '/assets/images/awsicons/redshift.png',
    process3: 'Redshift to Curated',
    imgUrl3: '/assets/images/awsicons/Analytics.png',
    process4: 'Curated to Q-Analytics',
    child:[
    {name:'Process1',
    steps: [
      { id:'#4933P1S1', name: 'Step1', iconText: 'SI', detail: '1 On-prem to S3', status:'1' },
      {  id:'#4933P1S2',name: 'Step2', iconText: 'SU', detail: '2 On-prem to S3' , status:'1'},
      {  id:'#4933P1S3',name: 'Step3', iconText: 'FP', detail: '3 On-prem to S3' , status:'0'},
      {  id:'#4933P1S4',name: 'Step4', iconText: '404', detail: '4 On-prem to S3' , status:'1'},
    ]},
    {name:'Process2',
    steps: [
      { id:'#4933P2S1', name: 'Step1', iconText: 'SI', detail: '1 S3 to Redshift source-raw', status:'1'},
      {  id:'#4933P2S2',name: 'Step2', iconText: 'SU', detail: '2 S3 to Redshift source-raw' , status:'0'},
      {  id:'#4933P2S3',name: 'Step3', iconText: 'FP', detail: '3 S3 to Redshift source-raw' , status:'1'},
      {  id:'#4933P2S4',name: 'Step4', iconText: '404', detail: '4 S3 to Redshift source-raw' , status:'1'},
    ]},
    {name:'Process3',
    steps: [
      { id:'#4933P3S1', name: 'Step1', iconText: 'SI', detail: '1 Redshift to Curated' , status:'1'},
      {  id:'#4933P3S2',name: 'Step2', iconText: 'SU', detail: '2 Redshift to Curated', status:'0' },
      {  id:'#4933P3S3',name: 'Step3', iconText: 'FP', detail: '3 Redshift to Curated' , status:'1'},
      {  id:'#4933P3S4',name: 'Step4', iconText: '404', detail: '4 Redshift to Curated', status:'1' },
    ]},
    {name:'Process4',
    steps: [
      { id:'#4933P4S1', name: 'Step1', iconText: 'SI', detail: '1 On-prem to S3', status:'1' },
      {  id:'#4933P4S2',name: 'Step2', iconText: 'SU', detail: '2 On-prem to S3' , status:'1'},
      {  id:'#4933P4S3',name: 'Step3', iconText: 'FP', detail: '3 On-prem to S3', status:'1' },
      {  id:'#4933P4S4',name: 'Step4', iconText: '404', detail: '4 On-prem to S3', status:'0' },
    ]},
  ]
  },
  {
    id:'#3911',
    imgUrl: '/assets/images/awsicons/Onprem.png',
    process1: 'On-prem to S3',
    rarrUrl:'/assets/images/awsicons/greenarr.jpg',
    imgUrl1: '/assets/images/awsicons/s3.png',
    process2: 'S3 to Redshift source-raw',
    garrUrl: '/assets/images/awsicons/redarr.jpg',
    imgUrl2: '/assets/images/awsicons/Curated.jpg',
    process3: 'Redshift to Curated',
    imgUrl3: '/assets/images/awsicons/Lineage.jpg',
    process4: 'Curated to Q-Analytics',
    child:[
      {name:'Process1',
      steps: [
        { id:'#3911P1S1', name: 'Step1', iconText: 'SI', detail: '1 On-prem to S3', status:'1' },
        {  id:'#3911P1S2',name: 'Step2', iconText: 'SU', detail: '2 On-prem to S3' , status:'1'},
        {  id:'#3911P1S3',name: 'Step3', iconText: 'FP', detail: '3 On-prem to S3' , status:'0'},
        {  id:'#3911P1S4',name: 'Step4', iconText: '404', detail: '4 On-prem to S3' , status:'1'},
      ]},
      {name:'Process2',
      steps: [
        { id:'#3911P2S1', name: 'Step1', iconText: 'SI', detail: '1 S3 to Redshift source-raw', status:'1'},
        {  id:'#3911P2S2',name: 'Step2', iconText: 'SU', detail: '2 S3 to Redshift source-raw' , status:'0'},
        {  id:'#3911P2S3',name: 'Step3', iconText: 'FP', detail: '3 S3 to Redshift source-raw' , status:'1'},
        {  id:'#3911P2S4',name: 'Step4', iconText: '404', detail: '4 S3 to Redshift source-raw' , status:'1'},
      ]},
      {name:'Process3',
      steps: [
        { id:'#3911P3S1', name: 'Step1', iconText: 'SI', detail: '1 Redshift to Curated' , status:'1'},
        {  id:'#3911P3S2',name: 'Step2', iconText: 'SU', detail: '2 Redshift to Curated', status:'0' },
        {  id:'#3911P3S3',name: 'Step3', iconText: 'FP', detail: '3 Redshift to Curated' , status:'1'},
        {  id:'#3911P3S4',name: 'Step4', iconText: '404', detail: '4 Redshift to Curated', status:'1' },
      ]},
      {name:'Process4',
      steps: [
        { id:'#3911P4S1', name: 'Step1', iconText: 'SI', detail: '1 On-prem to S3', status:'1' },
        {  id:'#3911P4S2',name: 'Step2', iconText: 'SU', detail: '2 On-prem to S3' , status:'1'},
        {  id:'#3911P4S3',name: 'Step3', iconText: 'FP', detail: '3 On-prem to S3', status:'1' },
        {  id:'#3911P4S4',name: 'Step4', iconText: '404', detail: '4 On-prem to S3', status:'0' },
      ]},
    ]
  },
 /*{
    id:'#3917',
    imgUrl: '/assets/images/awsicons/Onprem.png',
    process1: 'On-prem to S3',
    imgUrl1: '/assets/images/awsicons/s3.png',
    process2: 'S3 to Redshift source-raw',
    imgUrl2: '/assets/images/awsicons/redshift.png',
    process3: 'Redshift to Curated',
    imgUrl3: '/assets/images/awsicons/Analytics.png',
    process4: 'Curated to Q-Analytics',
  },
  {
    id:'#3913',
    imgUrl: '/assets/images/awsicons/Onprem.png',
    process1: 'On-prem to S3',
    imgUrl1: '/assets/images/awsicons/s3.png',
    process2: 'S3 to Redshift source-raw',
    imgUrl2: '/assets/images/awsicons/redshift.png',
    process3: 'Redshift to Curated',
    imgUrl3: '/assets/images/awsicons/Analytics.png',
    process4: 'Curated to Q-Analytics',
  },
  {
    id:'#3914',
    imgUrl: '/assets/images/awsicons/Onprem.png',
    process1: 'On-prem to S3',
    imgUrl1: '/assets/images/awsicons/s3.png',
    process2: 'S3 to Redshift source-raw',
    imgUrl2: '/assets/images/awsicons/redshift.png',
    process3: 'Redshift to Curated',
    imgUrl3: '/assets/images/awsicons/Analytics.png',
    process4: 'Curated to Q-Analytics',
  },
];*/

export default Pipelinetable;
