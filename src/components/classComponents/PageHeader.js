import React,{Component} from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaArrowRight, FaCaretRight, FaSearch } from 'react-icons/fa';
import {Container,Button,Row,Col} from 'reactstrap';


class PageHeader extends Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col xs="9">
                        <Button color="info" className="bh-1" style={{float:'left'}}><FaSearch /> 検索</Button>
                        <Button color="info" className="bh-1" style={{float:'left',marginLeft:'35px'}}>一覧</Button>
                        <Button color="info" className="bh-1" style={{float:'left',marginLeft:'35px'}}>新規登録</Button>
                        <Button color="info" className="bh-1" style={{float:'left',marginLeft:'35px'}}>EXCELエクスポート</Button>
                    </Col>
                    <Col xs="3">
                        <Button color="info" className="bh-1" style={{float:'right'}}>履歴CSVダウンロード</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs="6">
                        <Button color="info" className="bh-1" style={{float:'left'}}> <FaAngleDoubleLeft /> </Button>
                        <input type="text" style={{width:'50px',height:'33px',float:'left',marginLeft:'5px'}}/>
                        <Button color="info" className="bh-1" style={{float:'left',marginLeft:'5px'}}> <FaAngleDoubleRight /> </Button>
                        <span style={{position:'relative',top:'5px'}}>情報総数 133	表示範囲 1～20	ページ総数 7 </span>
                      
                    </Col>
                    <Col xs="3" className="data-amount">
                        <span style={{paddingRight:'20px'}}>行数指定</span>
                        <select className="form-select">
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span style={{paddingLeft:'10px'}}>行</span>
                    </Col>
                    <Col xs="3">
                        <Button color="warning" className="bh-1" style={{float:'right'}}>カラム表示設定</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default PageHeader;