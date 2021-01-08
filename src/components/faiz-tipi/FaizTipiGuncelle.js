import {Component} from 'react';
import {
    YteFormElement,
    YteColumn,
    YtePanel,
    YteForm,
    YteValidatableDataTable,
    YteButton,
    YteValidator,
    YteValidatableComponent,
    YteTextInput,
    handleTargetPathValueChange,
    YteNumberInput,
    handleRemoteCall, YteEnumInput
} from "yte-react-core";

class FaizTipiGuncelle extends Component {

    state = {
        data:  [],
        currentSelections:[],
        faizTipiOranlari: [],
        detayGoster: false
    };

    handleTableValueChange (key, rowIndex, val){
        let path = `data.[${rowIndex}].${key}`;
        handleTargetPathValueChange({target: this, path: path, value: val});
    };

    adTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="ad" >
            <YteTextInput value={rowData.ad} onChange={(val) => {this.handleTableValueChange("ad", column.rowIndex, val)}} />
        </YteValidatableComponent>;
    };

    zamanaGoreFaizHesaplamaYontemiTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="zamanaGoreFaizHesaplamaYontemi" >
            <YteEnumInput enumName="ZamanaGoreFaizHesaplamaYontemi" value={rowData.zamanaGoreFaizHesaplamaYontemi} onChange={newValue => this.handleTableValueChange("zamanaGoreFaizHesaplamaYontemi", column.rowIndex, newValue)}/>
        </YteValidatableComponent>;
    };

    faizOraniTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="faizOrani" >
            <YteNumberInput value={rowData.faizOrani} onChange={(val) => {console.log(val); console.log(column.rowIndex); this.handleTableValueChange("faizOrani", column.rowIndex, val)}} />
        </YteValidatableComponent>;
    };

    detayButtonTemplate (rowData, column){
        return  <YteButton styleType={"Primary"} onClick={()=> this.detayButtonClicked(rowData, column)}> Detay </YteButton>
    };

    selection(event){
        this.setState({currentSelections: event.value}, () => {
            let temp = "";
            for(let i=0; i<this.state.currentSelections.length; i++) {
                temp += (" " + this.state.currentSelections[i].name);
            }
        });
    }

    componentDidMount() {
        handleRemoteCall({
            method: "get",
            targetUrl: "/faizTipi/getirTumu",
            afterOperationSucceeded: (data) => {
                this.setState({data: data});
            }
        });
    }

    ekleButtonClicked () {
        const selections = [...this.state.data];
        selections.push({});
        this.setState({data: selections});
    }

    detayButtonClicked (rowData, column) {
        console.log(rowData.faizTipiOranlari);
        if(this.state.detayGoster === false) {
            this.setState({detayGoster: true, faizTipiOranlari: rowData.faizTipiOranlari});
        } else {
            this.setState({detayGoster: false});
        }
    }

    silButtonClicked () {
        const selection = {...this.state.currentSelections[0]}
        const selections = [...this.state.data];
        const filteredSelections = selections.filter(s => s.id !== selection.id);
        this.setState({data: filteredSelections});
    }

    silDisabled() {
        return this.state.currentSelections === undefined || this.state.currentSelections === null || this.state.currentSelections.length === 0;
    }

    render() {
        return <YteForm>
            <YteFormElement>
                <YtePanel>
                    <YteButton styleType={"Primary"} onClick={this.ekleButtonClicked.bind(this)}> Ekle </YteButton>
                    <YteButton styleType={"Primary"} onClick={this.silButtonClicked.bind(this)} disabled={this.silDisabled()}> Sil </YteButton>
                    <YteValidator target={this} >{
                            ({error, hasError, handleChildErrorChange}) => {
                                return (<div>
                                    <YteValidatableDataTable target={this} ref={this.myRef} value={this.state.data} handleChildErrorChange={handleChildErrorChange} autoLayout={true} selection={this.state.currentSelections} onSelectionChange={event => this.selection(event)}>
                                        <YteColumn selectionMode="multiple" style={{width: '2em'}}/>
                                        <YteColumn header="faiz-tipi.ad" body={this.adTemplate.bind(this)} />
                                        <YteColumn header="faiz-tipi.zamanaGoreFaizHesaplamaYontemi" body={this.zamanaGoreFaizHesaplamaYontemiTemplate.bind(this)} />
                                        <YteColumn header="faiz-tipi.detay" body={this.detayButtonTemplate.bind(this)} />
                                    </YteValidatableDataTable>
                                    {this.state.detayGoster === true ?
                                    <YteValidatableDataTable target={this} ref={this.myRef} value={this.state.faizTipiOranlari} handleChildErrorChange={handleChildErrorChange} autoLayout={true} selection={this.state.currentSelections} onSelectionChange={event => this.selection(event)}>
                                        <YteColumn selectionMode="multiple" style={{width: '2em'}}/>
                                        <YteColumn header="faiz-tipi-detay.faizOrani" body={this.faizOraniTemplate.bind(this)} />
                                    </YteValidatableDataTable> : null }
                                    <YteButton styleType={hasError ? "Danger" : "Success"} > Guncelle </YteButton>
                                </div>);
                            }
                        }</YteValidator>
                </YtePanel>
            </YteFormElement>
        </YteForm>
    }
}

export default FaizTipiGuncelle;