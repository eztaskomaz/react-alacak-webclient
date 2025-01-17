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
    YteBooleanInput,
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

    nameTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="ad" >
            <YteTextInput value={rowData.ad} onChange={(val) => {this.handleTableValueChange("ad", column.rowIndex, val)}} />
        </YteValidatableComponent>;
    };

    aciklamaTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="aciklama" >
            <YteTextInput value={rowData.aciklama} onChange={(val) => {this.handleTableValueChange("aciklama", column.rowIndex, val)}} />
        </YteValidatableComponent>;
    };

    tahakkukSonradanEklenebilirTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="tahakkukSonradanEklenebilir" >
            <YteBooleanInput value={rowData.tahakkukSonradanEklenebilir} onChange={(val) => {this.handleTableValueChange("tahakkukSonradanEklenebilir", column.rowIndex, val)}} />
        </YteValidatableComponent>;
    };

    tahakkukIptalEdilebilirTemplate (rowData, column){
        return <YteValidatableComponent error={rowData.yteRowError} errorPath="tahakkukIptalEdilebilir" >
            <YteBooleanInput value={rowData.tahakkukIptalEdilebilir} onChange={(val) => {this.handleTableValueChange("tahakkukIptalEdilebilir", column.rowIndex, val)}} />
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
            targetUrl: "/alacakKategorisi/getirTumu",
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
                                        <YteColumn header="alacak-kategorisi.ad" body={this.nameTemplate.bind(this)} />
                                        <YteColumn header="alacak-kategorisi.aciklama" body={this.aciklamaTemplate.bind(this)} />
                                        <YteColumn header="alacak-kategorisi.tahakkukSonradanEklenebilir" body={this.tahakkukSonradanEklenebilirTemplate.bind(this)} />
                                        <YteColumn header="alacak-kategorisi.tahakkukIptalEdilebilir" body={this.tahakkukIptalEdilebilirTemplate.bind(this)} />
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