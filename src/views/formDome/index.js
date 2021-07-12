/**
 * @todo 需要提交的项
 */
export const submitFormValue = [];
/**
 * @todo 此列只适用于add操作
 * @param {String} label 此项 输入框左侧文本
 * @param {Object} model Display:类name(用来显示的),submit:类id(用来提交的)
 * @param {Boolean} initializedHidden 是否初始化隐藏
 * @param {String} name 此项name,与此项key值相等
 * @param {String} placeholder 输入框占位提示文字
 * @param {Boolean} readonly 是否通过选择等非直接输入的方式获取值
 * @param {String} toast vant组件 Toast 提示
 * @param {Array} sufferIndexFormValue 此项修改时,所要清除的项
 * @param {Array} preconditionIndexFormValue 此项填写时,前置必填的项
 * @param {String} toPickPageFormPageName  需要跳转页面(<=name)进行选择操作(单选/多选/地图等页面)
 * @param {String} openPickerFormRefName 需要打开当前页面的Picker弹框(<=组件ref值名称)进行选择操作
 * @param {Array} ShowHiddenTriggerFormValue 此项修改时, 清除并且隐藏(不提交)的项
 * @param {String} type 同 vant type 输入框类型, 可选值为 tel digit number textarea password 等
 * @param {Boolean} required 是否显示表单必填星号即是否必填
 * @param {String} leftIcon 左侧图标名称或图片链接
 * @param {String} rightIcon 右侧图标名称或图片链接
 * @param {String} autocomplete input 标签原生的自动完成属性
 * @param {Boolean} unContainSpaces 内容是否不可以含有空格
 * @param {String} inputAlign vant中 通过 input-align 属性可以设置输入框内容的对齐方式，可选值为 center、right。
 * @param {Boolean} disabled 是否禁用输入框
 * @param {Boolean} colon 是否在 label 后面添加冒号
 * @param {Boolean} clearable 是否启用清除图标，点击清除图标后会清空输入框
 * @param {String} clearIcon  清除图标名称或图片链接  默认值为clear
 */
export const objList = {
    cityId: {
        index: 0,
        label: "地区",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "cityId",
        placeholder: "请选择下属单位",
        readonly: true,
        functionName: "loadCityName",
        value: "cityName",
        toast: "请选择下属单位",
        ChoiceJudgment: 'isInputPlace_fun',
        ResetIndex: [1, 2, 3, 4, 5, 6, 7],
        type: "text",
    },
    examId: {
        index: 1,
        label: "考试类型",
        model: "",
        if: true,
        name: "examId",
        value: "examName",
        placeholder: "请选择考试类型",
        readonly: true,
        functionName: "isSignTutorialAndTheory_fun",
        toast: "请选择考试类型",
        verify: [0],
        ChoiceJudgment: 'examType_fun',
        ResetIndex: [4, 5, 6, 7],
        type: "text"
    },
    placeId: {
        index: 2,
        label: "报名点",
        model: "",
        if: true,
        name: "placeId",
        placeholder: "请选择",
        readonly: true,
        value: "placeName",
        functionName: "picker_fun",
        toast: "请选择报名点",
        verify: [0],
        ResetIndex: [4, 5, 6, 7],
        type: "text"
    },
    placeCode: {
        index: 3,
        label: "考点编号",
        model: "",
        if: false,
        name: "placeCode",
        value: "placeCode",
        placeholder: "输入考点编号",
        readonly: false,
        functionName: "",
        toast: "请输入考点编号",
        verify: [0],
        ResetIndex: [4, 5, 6, 7],
        type: "text"
    },
    subjectId: {
        index: 4,
        label: "报考科目",
        model: "",
        if: false,
        name: "subjectId",
        value: "subjectName",
        placeholder: "请选择",
        readonly: true,
        functionName: "picker_fun",
        toast: "请选择报考科目",
        verify: [2, 3],
        ResetIndex: [5, 6, 7],
        or: true,
        type: "text"
    },
    subjectLevelId: {
        index: 5,
        label: "报考级别",
        model: "",
        value: "subjectLevelName",
        if: false,
        name: "subjectLevelId",
        placeholder: "请选择",
        readonly: true,
        functionName: "picker_fun",
        toast: "请选择报考级别",
        verify: [4],
        ResetIndex: [6, 7],
        type: "text"
    },
    theoryId: {
        index: 6,
        label: "乐理单试",
        model: "",
        if: false,
        name: "theoryId",
        placeholder: "请选择",
        readonly: true,
        functionName: "picker_fun",
        value: "theoryName",
        toast: "请选择乐理单试",
        verify: [2],
        ResetIndex: [7],
        type: "text"
    },
    turoialIds: {
        index: 7,
        label: "辅导课", //省显示
        model: "",
        if: false,
        name: "turoialIds",
        value: "turoialIdsName",
        placeholder: "请选择",
        readonly: true,
        functionName: "picker_fun",
        toast: "请填写辅导课",
        verify: [4, 6, 2],
        or: true,
        ResetIndex: [],
        type: "textarea"
    },
    contact: {
        index: 8,
        label: "联系人",
        model: "",
        if: true,
        name: "contact",
        value: "contact",
        placeholder: "请输入联系人",
        readonly: false,
        functionName: "",
        toast: "请输入联系人",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    phone: {
        index: 9,
        label: "手机号码",
        model: "",
        if: true,
        name: "phone",
        value: "phone",
        placeholder: "联系人手机号",
        readonly: false,
        functionName: "",
        toast: "联系人手机号",
        verify: [],
        ResetIndex: [],
        type: "number"
    },
    area: {
        index: 10,
        label: "所在地区",
        model: "",
        if: true,
        name: "area",
        value: "area",
        placeholder: "请选择",
        readonly: true,
        functionName: "fieldClickArea",
        toast: "请选择所在地区",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    address: {
        index: 11,
        label: "详细地址",
        model: "",
        if: true,
        name: "address",
        value: "address",
        placeholder: "请填写详细地址",
        readonly: true,
        functionName: "",
        toast: "请填写详细地址",
        verify: [],
        ResetIndex: [],
        type: "textarea"
    },
    name: {
        index: 12,
        label: "真实姓名",
        model: "",
        if: true,
        name: "name",
        value: "name",
        placeholder: "请输入您的真实姓名",
        readonly: false,
        functionName: "",
        toast: "请输入您的真实姓名",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    pinyinId: {
        index: 13,
        label: "真实姓名拼音",
        model: "",
        if: true,
        name: "pinyinId",
        value: "pinyin",
        placeholder: "请选择您的真实姓名拼音",
        readonly: true,
        functionName: "",
        toast: "请选择您的真实姓名拼音",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    sexId: {
        index: 14,
        label: "考生性别",
        model: "",
        if: true,
        name: "sexId",
        value: "sex",
        placeholder: "请选择",
        readonly: true,
        functionName: "",
        toast: "请选择考生性别",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    cardType: {
        index: 15,
        label: "证件类型",
        model: "",
        if: true,
        name: "cardType",
        value: "cardTypeValue",
        placeholder: "请选择证件类型",
        readonly: true,
        functionName: "",
        toast: "请选择证件类型",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    cardCode: {
        index: 16,
        label: "证件号码",
        model: "",
        if: true,
        name: "cardCode",
        value: "cardCode",
        placeholder: "请填写证件号码",
        readonly: false,
        functionName: "",
        toast: "请填写证件号码",
        verify: [],
        ResetIndex: [],
        type: "text"
    },
    birthday: {
        index: 17,
        label: "出生日期",
        model: "",
        if: true,
        name: "birthday",
        value: "birthday",
        placeholder: "请选择出生日期",
        readonly: true,
        functionName: "",
        toast: "请选择出生日期",
        verify: [],
        ResetIndex: [],
        type: "text"
    }
}