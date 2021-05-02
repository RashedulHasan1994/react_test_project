import React,{Component} from 'react';
import { FaFolderOpen, FaPlusCircle, FaSearch } from 'react-icons/fa';
import {Container,Button,Row,Col,Table} from 'reactstrap';


class PageContent extends Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Table className='table-content mt-3'>
                            <thead className='table-content-header '>
                                <tr>
                                <th></th>
                                <th></th>
                                <th><Button color="primary" className="bh-half" >会社CD</Button></th>
                                <th><Button color="primary" className="bh-half" >会社名</Button></th>
                                <th><Button color="primary" className="bh-half" >会社名略称</Button></th>
                                <th><Button color="primary" className="bh-half" >帝国ﾃﾞｰﾀﾊﾞﾝｸ信用録PDF</Button></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                <td></td>
                                <td></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                </tr>

                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000001</td>
                                <td>請求課税区分 1０％</td>
                                <td>基本業種</td>
                                <td>Bit71.pdf</td>
                                </tr>

                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000002</td>
                                <td>請求課税区分 15％</td>
                                <td>基本業種</td>
                                <td>New71.pdf</td>
                                </tr>

                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000003</td>
                                <td>請求課税区分 20％</td>
                                <td>基本業種</td>
                                <td>Cot71.pdf</td>
                                </tr>

                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000004</td>
                                <td>請求課税区分 25％</td>
                                <td>基本業種</td>
                                <td>Nof71.pdf</td>
                                </tr>
                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000005</td>
                                <td>請求課税区分 30％</td>
                                <td>基本業種</td>
                                <td>Jut71.pdf</td>
                                </tr>
                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000006</td>
                                <td>請求課税区分 35％</td>
                                <td>基本業種</td>
                                <td>Kaf71.pdf</td>
                                </tr>
                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000007</td>
                                <td>請求課税区分 40％</td>
                                <td>基本業種</td>
                                <td>Res71.pdf</td>
                                </tr>
                                <tr>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaPlusCircle /> 検索</Button></td>
                                <td className="pl-0 pr-0"><Button color="info" className="bh-1" ><FaFolderOpen /> 検索</Button></td>
                                <td>000009</td>
                                <td>請求課税区分 45％</td>
                                <td>基本業種</td>
                                <td>Yak71.pdf</td>
                                </tr>
                                
                            </tbody>
                            </Table>
                    </Col>
                </Row>                  
            </Container>
        )
    }
}
export default PageContent;