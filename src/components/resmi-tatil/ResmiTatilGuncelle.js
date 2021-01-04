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
    YteDateInput,
    handleTargetPathValueChange,
    handleRemoteCall
} from "yte-react-core";

class AlacakKategorisiGuncelle extends Component {

    state = {
        data:  [],
        currentSelections:[]
    };

    handleTableValueChange (key, rowIndex, val){
        let path = `data.[${rowIndex}].${key}`;
        handleTargetPathValueChange({target: this, path: path, value: val});
    };

    baslangicTarihiTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="baslangicTarihi" >
            <YteDateInput value={rowData.baslangicTarihi} onChange={(val) => {this.handleTableValueChange("baslangicTarihi", column.rowIndex, val)}} />
        </YteValidatableComponent>;
    };

    bitisTarihiTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="bitisTarihi" >
            {rowData.bitisTarihi !== null ? <YteDateInput value={rowData.bitisTarihi} onChange={(val) => {this.handleTableValueChange("bitisTarihi", column.rowIndex, val)}} /> : null}
        </YteValidatableComponent>;
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
            targetUrl: "/resmiTatil/getirTumu",
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
                    <YteValidator target={this} >
                        {
                            ({error, hasError, handleChildErrorChange}) => {
                                return (<div>
                                    <YteValidatableDataTable target={this} ref={this.myRef} value={this.state.data} handleChildErrorChange={handleChildErrorChange} autoLayout={true} selection={this.state.currentSelections} onSelectionChange={event => this.selection(event)}>
                                        <YteColumn selectionMode="single" style={{width: '2em'}}/>
                                        <YteColumn header="resmi-tatil.baslangicTarihi" body={this.baslangicTarihiTemplate.bind(this)} />
                                        <YteColumn header="resmi-tatil.bitisTarihi" body={this.bitisTarihiTemplate.bind(this)} />
                                    </YteValidatableDataTable>
                                    <YteButton styleType={hasError ? "Danger" : "Success"} > Guncelle </YteButton>
                                </div>);
                            }
                        }
                    </YteValidator>
                </YtePanel>
            </YteFormElement>
        </YteForm>
    }
}

export default AlacakKategorisiGuncelle;