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

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <Box overflow="auto">
        <ProductTable>
         
          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                    <TableCell align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                      {product.id}
                    </TableCell>

                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.imgUrl} />
                    </TableCell>

                    <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                      <Box display="flex" alignItems="left">
                        
                        <Paragraph>{product.process1}</Paragraph>
                        
                      </Box>
                    </TableCell>

                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.rarrUrl} />
                    </TableCell>


                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.imgUrl1} />
                    </TableCell>

                    <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                      <Box display="flex" alignItems="left">
                        
                        <Paragraph>{product.process2}</Paragraph>
                        
                      </Box>
                    </TableCell>
                    
                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.garrUrl} />
                    </TableCell>
                    

                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.imgUrl2} />
                    </TableCell>

                    <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                      <Box display="flex" alignItems="left">
                        
                        <Paragraph>{product.process3}</Paragraph>
                        
                      </Box>
                    </TableCell>
                    
                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.rarrUrl} />
                    </TableCell>
                   

                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Avatar src={product.imgUrl3} />
                    </TableCell>

                    <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                      <Box display="flex" alignItems="left">
                        
                        <Paragraph>{product.process4}</Paragraph>
                        
                      </Box>
                    </TableCell>
                                     

                    <TableCell sx={{ px: 0 }} colSpan={1}>
                      <IconButton>
                        <Icon color="primary">expand_more</Icon>
                      </IconButton>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
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
  },*/
];

export default TopSellingTable;
