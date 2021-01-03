import {
    enumDisplay,
    formatBoolean,
    getModuleRoute,
    getStoreValue,
    historyPush,
    YteBooleanInput,
    YteColumn,
    YteCriteriaAndQueryPanel,
    YteEnumInput,
    YteForm,
    YteFormElement,
    YteRangeInput,
    YteTextInput,
    YteSelectInput, handleTargetPathValueChange, handleRemoteCall, getTargetPathValue
} from "yte-react-core";
import {Component} from 'react';

class KalemTuruSorgula extends Component {

    state = {
        alacakKategorisiOptions: [],
        tahakkukTuruOptions: []
    }

    componentDidMount() {
        handleRemoteCall({
            method: "get",
            targetUrl: "/tahakkukTuru/getAlacakKategorisiList",
            afterOperationSucceeded: (data) => {
                this.setState({alacakKategorisiOptions: data});
            }
        });
    }

    requestForTahakkukTuruByAlacakKategorisi = (alacakKategorisiId) => {
        handleRemoteCall({
            method: "post",
            // targetUrl: "/tahakkukTuru/getByAlacakKategorisiId?alacakKategorisiId=" + alacakKategorisiId,
            targetUrl: "/tahakkukTuru/getByAlacakKategorisi",
            requestBodyParams: {
                 alacakKategorisiId: alacakKategorisiId
            },
            afterOperationSucceeded: (data) => {
                this.setState({tahakkukTuruOptions: data});
            }
        });
    }

    criteriaPanelComponent = ({queryInfo, handleQueryInfoChange, getTargetPathValue}) => {
        return <YteForm key="yte-react-criteriaPanel">
            <YteFormElement label="kalem-turu.id" sectionId={5}>
                <YteRangeInput type="Number"
                               minProps={{
                                   value: getTargetPathValue(queryInfo, "rng.id.minValue"),
                                   onChange: (newValue => handleQueryInfoChange({
                                       path: "rng.id.minValue",
                                       value: newValue
                                   }))
                               }}
                               maxProps={{
                                   value: getTargetPathValue(queryInfo, "rng.id.maxValue"),
                                   onChange: (newValue => handleQueryInfoChange({
                                       path: "rng.id.maxValue",
                                       value: newValue
                                   }))
                               }}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.ad" sectionId={5}>
                <YteTextInput value={getTargetPathValue(queryInfo, "eq.ad")}
                              onChange={newValue => handleQueryInfoChange({path: "eq.ad", value: newValue})}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.alacakKategorisi" sectionId={5}>
                <YteSelectInput displayProperty="ad" valueProperty="id"
                                value={getTargetPathValue(queryInfo, "eq.alacakKategorisi")}
                                onChange={newValue => {
                                    handleQueryInfoChange({
                                        path: "eq.alacakKategorisi",
                                        value: newValue
                                    });
                                    this.requestForTahakkukTuruByAlacakKategorisi(newValue)}}
                                options={this.state.alacakKategorisiOptions}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.tahakkukTuru" sectionId={5}>
                <YteSelectInput displayProperty="ad" valueProperty="id"
                                value={getTargetPathValue(queryInfo, "eq.tahakkukTuru")}
                                onChange={newValue => {
                                    handleQueryInfoChange({
                                        path: "eq.tahakkukTuru",
                                        value: newValue})}}
                                options={this.state.tahakkukTuruOptions}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.emanetDurumu" sectionId={5}>
                <YteEnumInput enumName="EmanetDurumu"
                              value={getTargetPathValue(queryInfo, "eq.emanetDurumu")}
                              onChange={newValue => handleQueryInfoChange({
                                  path: "eq.emanetDurumu",
                                  value: newValue
                              })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.kurumHesapPlaniTipi" sectionId={5}>
                <YteEnumInput enumName="KurumHesapPlaniTipi"
                              value={getTargetPathValue(queryInfo, "eq.kurumHesapPlaniTipi")}
                              onChange={newValue => handleQueryInfoChange({
                                  path: "eq.kurumHesapPlaniTipi",
                                  value: newValue
                              })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.durum" sectionId={5}>
                <YteEnumInput enumName="Durum"
                              value={getTargetPathValue(queryInfo, "eq.durum")}
                              onChange={newValue => handleQueryInfoChange({
                                  path: "eq.durum",
                                  value: newValue
                              })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.muhasebeKaydiAtilirMi" sectionId={5}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.muhasebeKaydiAtilirMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.muhasebeKaydiAtilirMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.topluOdemeOlusturulabilirMi" sectionId={5}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.topluOdemeOlusturulabilirMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.topluOdemeOlusturulabilirMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.kdvliMi" sectionId={5}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.kdvliMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.kdvliMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.butceyeGelirMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.butceyeGelirMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.butceyeGelirMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.baskasiAdinaTakipMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.baskasiAdinaTakipMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.baskasiAdinaTakipMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.surekliMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.surekliMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.surekliMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.indirimGirilsinMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.indirimGirilsinMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.indirimGirilsinMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.uzunVadeMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.uzunVadeMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.uzunVadeMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.takipMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.takipMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.takipMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.butceyeGelirFaiziAtilsinMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.butceyeGelirFaiziAtilsinMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.butceyeGelirFaiziAtilsinMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.odemeKartTipi" sectionId={6}>
                <YteEnumInput enumName="OdemeKartTipi"
                              value={getTargetPathValue(queryInfo, "eq.odemeKartTipi")}
                              onChange={newValue => handleQueryInfoChange({
                                  path: "eq.odemeKartTipi",
                                  value: newValue
                              })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.olusturulacakTahakkukKalemiTipi" sectionId={6}>
                <YteEnumInput enumName="OlusturulacakTahakkukKalemiTipi"
                              value={getTargetPathValue(queryInfo, "eq.olusturulacakTahakkukKalemiTipi")}
                              onChange={newValue => handleQueryInfoChange({
                                  path: "eq.olusturulacakTahakkukKalemiTipi",
                                  value: newValue
                              })}/>
            </YteFormElement>
            <YteFormElement label="kalem-turu.faizEmaneteAlinsinMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.faizEmaneteAlinsinMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.faizEmaneteAlinsinMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
        </YteForm>
    }

    rowClick = (row) => {
        let moduleRouteViewPageUrl = getStoreValue("moduleRouteViewPageUrl");
        historyPush(this.props, getModuleRoute(this.props) + "/" + moduleRouteViewPageUrl + "?id=" + (row.data.id), true);
    };

    render() {
        return <YteCriteriaAndQueryPanel
            queryUrl="/kalemTuru/sorgula"
            deleteUrl="/kalemTuru/pasiflestir"
            criteriaPanelComponent={this.criteriaPanelComponent}
            dataTableProps={{onRowClick: this.rowClick}}>
            <YteColumn field="id" header="kalem-turu.id"/>
            <YteColumn field="ad" header="kalem-turu.ad"/>
            <YteColumn header="kalem-turu.emanetDurumu"
                       body={(rowData) => (enumDisplay("EmanetDurumu", rowData.olusturulacakTahakkukTipi))}/>
            <YteColumn header="kalem-turu.durum"
                       body={(rowData) => (enumDisplay("Durum", rowData.olusturulacakTahakkukTipi))}/>
            <YteColumn header="kalem-turu.butceyeGelirMi"
                       body={(rowData) => (formatBoolean(rowData.butceyeGelirMi))}/>
            <YteColumn header="kalem-turu.baskasiAdinaTakipMi"
                       body={(rowData) => (formatBoolean(rowData.baskasiAdinaTakipMi))}/>
            <YteColumn header="kalem-turu.surekliMi"
                       body={(rowData) => (formatBoolean(rowData.surekliMi))}/>
            <YteColumn header="kalem-turu.indirimGirilsinMi"
                       body={(rowData) => (formatBoolean(rowData.indirimGirilsinMi))}/>
            <YteColumn header="kalem-turu.takipMi"
                       body={(rowData) => (formatBoolean(rowData.takipMi))}/>
            <YteColumn header="kalem-turu.muhasebeKaydiAtilirMi"
                       body={(rowData) => (formatBoolean(rowData.muhasebeKaydiAtilirMi))}/>
            <YteColumn header="kalem-turu.uzunVadeMi"
                       body={(rowData) => (formatBoolean(rowData.uzunVadeMi))}/>
            <YteColumn header="kalem-turu.butceyeGelirFaiziAtilsinMi"
                       body={(rowData) => (formatBoolean(rowData.butceyeGelirFaiziAtilsinMi))}/>
            <YteColumn header="kalem-turu.odemeKartTipi"
                       body={(rowData) => (enumDisplay("OdemeKartTipi", rowData.olusturulacakTahakkukTipi))}/>
            <YteColumn header="kalem-turu.olusturulacakTahakkukKalemiTipi"
                       body={(rowData) => (enumDisplay("OlusturulacakTahakkukKalemiTipi", rowData.olusturulacakTahakkukTipi))}/>
            <YteColumn header="kalem-turu.faizEmaneteAlinsinMi"
                       body={(rowData) => (formatBoolean(rowData.faizEmaneteAlinsinMi))}/>>
        </YteCriteriaAndQueryPanel>
    }

}

export default KalemTuruSorgula;