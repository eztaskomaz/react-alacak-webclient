import {
    YteColumn,
    YteCriteriaAndQueryPanel,
    YteForm,
    YteFormElement,
    YteTextInput,
    YteRangeInput,
    YteBooleanInput,
    historyPush,
    getModuleRoute,
    getStoreValue,
    YteEnumInput
} from "yte-react-core";
import {Component} from 'react';

class AlacakKategorisiSorgula extends Component {

    criteriaPanelComponent = ({queryInfo, handleQueryInfoChange, getTargetPathValue}) => {
        return <YteForm key="yte-react-criteriaPanel">
            <YteFormElement label="tahakkuk-turu.ad" sectionId={5}>
                <YteTextInput value={getTargetPathValue(queryInfo, "eq.ad")}
                              onChange={newValue => handleQueryInfoChange({path: "eq.ad", value: newValue})}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.durum" sectionId={5}>
                <YteEnumInput enumName="Durum"  value={getTargetPathValue(queryInfo, "eq.durum")} onChange={newValue => handleQueryInfoChange({path: "eq.durum", value: newValue})} />
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.kismenKapatilabilirMi" sectionId={5}>
                <YteBooleanInput  value={getTargetPathValue(queryInfo, "eq.kismenKapatilabilirMi")} onChange={newValue => handleQueryInfoChange({path: "eq.kismenKapatilabilirMi", value: newValue})} />
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.kismenTaksitKapatilabilirMi" sectionId={5}>
                <YteBooleanInput  value={getTargetPathValue(queryInfo, "eq.kismenTaksitKapatilabilirMi")} onChange={newValue => handleQueryInfoChange({path: "eq.kismenTaksitKapatilabilirMi", value: newValue})} />
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.pesinatliMi" sectionId={5}>
                <YteBooleanInput  value={getTargetPathValue(queryInfo, "eq.pesinatliMi")} onChange={newValue => handleQueryInfoChange({path: "eq.pesinatliMi", value: newValue})} />
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.alacakKategorisiId" sectionId={6}>
                <YteRangeInput type="Number"
                               minProps={{value: getTargetPathValue(queryInfo, "rng.alacakKategorisiId.minValue"), onChange:(newValue => handleQueryInfoChange({path: "rng.alacakKategorisiId.minValue", value: newValue}))}}
                               maxProps={{value: getTargetPathValue(queryInfo, "rng.alacakKategorisiId.maxValue"), onChange:(newValue => handleQueryInfoChange({path: "rng.alacakKategorisiId.maxValue", value: newValue}))}}/>
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.sayistayIlamiTuruMu" sectionId={6}>
                <YteBooleanInput  value={getTargetPathValue(queryInfo, "eq.sayistayIlamiTuruMu")} onChange={newValue => handleQueryInfoChange({path: "eq.sayistayIlamiTuruMu", value: newValue})} />
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.etahsilatYapilabilirMi" sectionId={6}>
                <YteBooleanInput  value={getTargetPathValue(queryInfo, "eq.etahsilatYapilabilirMi")} onChange={newValue => handleQueryInfoChange({path: "eq.etahsilatYapilabilirMi", value: newValue})} />
            </YteFormElement>
            <YteFormElement label="tahakkuk-turu.olusturulacakTahakkukTipi" sectionId={6}>
                <YteEnumInput enumName="OlusturulacakTahakkukTipi"  value={getTargetPathValue(queryInfo, "eq.olusturulacakTahakkukTipi")} onChange={newValue => handleQueryInfoChange({path: "eq.olusturulacakTahakkukTipi", value: newValue})} />
            </YteFormElement>
        </YteForm>
    }

    rowClick = (row) => {
        let moduleRouteViewPageUrl = getStoreValue("moduleRouteViewPageUrl");
        historyPush(this.props, getModuleRoute(this.props) + "/" + moduleRouteViewPageUrl + "?id=" + (row.data.id), true);
    };

    queryUrl = "/tahakkukTuru/sorgula"

    render() {

        return <YteCriteriaAndQueryPanel
            queryUrl={this.queryUrl}
            deleteUrl="/tahakkukTuru/pasiflestir"
            criteriaPanelComponent={this.criteriaPanelComponent}
            dataTableProps={{onRowClick: this.rowClick}}>

            <YteColumn field="ad" header="tahakkuk-turu.id"/>
            <YteColumn field="alacakKategorisi" header="tahakkuk-turu.alacakKategorisiId"/>
            <YteColumn field="aciklama" header="tahakkuk-turu.aciklama"/>
            <YteColumn field="durum" header="tahakkuk-turu.durum"/>
            <YteColumn field="olusturulacakTahakkukTipi" header="tahakkuk-turu.olusturulacakTahakkukTipi"/>
            <YteColumn field="kismenKapatilabilirMi" header="tahakkuk-turu.kismenKapatilabilirMi"/>
            <YteColumn field="kismenTaksitKapatilabilirMi" header="tahakkuk-turu.kismenTaksitKapatilabilirMi"/>
            <YteColumn field="sayistayIlamiTuruMu" header="tahakkuk-turu.sayistayIlamiTuruMu"/>
            <YteColumn field="pesinatliMi" header="tahakkuk-turu.pesinatliMi"/>
        </YteCriteriaAndQueryPanel>
    }

}

export default AlacakKategorisiSorgula;