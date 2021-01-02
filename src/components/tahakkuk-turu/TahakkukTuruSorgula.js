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
    YteButton,
    T
} from "yte-react-core";
import {Component} from 'react';

class TahakkukTuruSorgula extends Component {

    criteriaPanelComponent = ({queryInfo, handleQueryInfoChange, getTargetPathValue}) => {
        return <YteForm key="yte-react-criteriaPanel">
            <YteFormElement label="tahakkuk-turu.ad" sectionId={5}>
                <YteTextInput value={getTargetPathValue(queryInfo, "eq.ad")}
                              onChange={newValue => handleQueryInfoChange({path: "eq.ad", value: newValue})}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.durum" sectionId={5}>
                <YteEnumInput enumName="Durum" value={getTargetPathValue(queryInfo, "eq.durum")}
                              onChange={newValue => handleQueryInfoChange({path: "eq.durum", value: newValue})}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.kismenKapatilabilirMi" sectionId={5}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.kismenKapatilabilirMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.kismenKapatilabilirMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.kismenTaksitKapatilabilirMi" sectionId={5}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.kismenTaksitKapatilabilirMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.kismenTaksitKapatilabilirMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.pesinatliMi" sectionId={5}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.pesinatliMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.pesinatliMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.alacakKategorisiId" sectionId={6}>
                <YteRangeInput type="Number"
                               minProps={{
                                   value: getTargetPathValue(queryInfo, "rng.alacakKategorisiId.minValue"),
                                   onChange: (newValue => handleQueryInfoChange({
                                       path: "rng.alacakKategorisiId.minValue",
                                       value: newValue
                                   }))
                               }}
                               maxProps={{
                                   value: getTargetPathValue(queryInfo, "rng.alacakKategorisiId.maxValue"),
                                   onChange: (newValue => handleQueryInfoChange({
                                       path: "rng.alacakKategorisiId.maxValue",
                                       value: newValue
                                   }))
                               }}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.sayistayIlamiTuruMu" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.sayistayIlamiTuruMu")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.sayistayIlamiTuruMu",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.etahsilatYapilabilirMi" sectionId={6}>
                <YteBooleanInput value={getTargetPathValue(queryInfo, "eq.etahsilatYapilabilirMi")}
                                 onChange={newValue => handleQueryInfoChange({
                                     path: "eq.etahsilatYapilabilirMi",
                                     value: newValue
                                 })}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.olusturulacakTahakkukTipi" sectionId={6}>
                <YteEnumInput enumName="OlusturulacakTahakkukTipi"
                              value={getTargetPathValue(queryInfo, "eq.olusturulacakTahakkukTipi")}
                              onChange={newValue => handleQueryInfoChange({
                                  path: "eq.olusturulacakTahakkukTipi",
                                  value: newValue
                              })}/>
            </YteFormElement>
        </YteForm>
    }

    rowClick = (row) => {
        let moduleRouteViewPageUrl = getStoreValue("moduleRouteViewPageUrl");
        historyPush(this.props, getModuleRoute(this.props) + "/" + moduleRouteViewPageUrl + "?id=" + (row.data.id), true);
    };

    handleClickQueryPageOptions = () => {
        historyPush(this.props, getModuleRoute(this.props) + "/tasi", true);
    };

    render() {
        return <YteCriteriaAndQueryPanel
            queryUrl="/tahakkukTuru/sorgula"
            deleteUrl="/tahakkukTuru/pasiflestir"
            criteriaPanelComponent={this.criteriaPanelComponent}
            dataTableProps={{onRowClick: this.rowClick}}
            queryPanelAfterButtons={() => {
                return <span key="AfterFirstButton">
                        <YteButton styleType={"Primary"} onClick={() => {this.handleClickQueryPageOptions()}}><T>{"tahakkuk-turu.tasi"}</T></YteButton>
                    </span>
            }}>
            <YteColumn field="id" header="tahakkuk-turu.id"/>
            <YteColumn field="ad" header="tahakkuk-turu.ad"/>
            <YteColumn field="alacakKategorisiId" header="tahakkuk-turu.alacakKategorisiId"/>
            <YteColumn field="aciklama" header="tahakkuk-turu.aciklama"/>
            <YteColumn header="tahakkuk-turu.durum" body={(rowData) => (enumDisplay("Durum", rowData.durum))}/>
            <YteColumn header="tahakkuk-turu.olusturulacakTahakkukTipi"
                       body={(rowData) => (enumDisplay("OlusturulacakTahakkukTipi", rowData.olusturulacakTahakkukTipi))}/>
            <YteColumn header="tahakkuk-turu.kismenKapatilabilirMi"
                       body={(rowData) => (formatBoolean(rowData.kismenKapatilabilirMi))}/>
            <YteColumn header="tahakkuk-turu.kismenTaksitKapatilabilirMi"
                       body={(rowData) => (formatBoolean(rowData.kismenTaksitKapatilabilirMi))}/>
            <YteColumn header="tahakkuk-turu.sayistayIlamiTuruMu"
                       body={(rowData) => (formatBoolean(rowData.sayistayIlamiTuruMu))}/>
            <YteColumn header="tahakkuk-turu.pesinatliMi" body={(rowData) => (formatBoolean(rowData.pesinatliMi))}/>
        </YteCriteriaAndQueryPanel>
    }

}

export default TahakkukTuruSorgula;