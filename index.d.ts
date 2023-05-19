
/**
 * 添加打印机请求项
 */
export interface PrinterRequestItem {

/**
 * 打印机品牌
 */
printerBrand?: string;
/**
 * 流量卡
 */
trafficCard?: string;
/**
 * 打印方式 1.整单 2.一品一单
 */
printMethod?: number;
/**
 * 功能模块
 */
functionModule?: string;
/**
 * 打印机名称
 */
name?: string;
/**
 * 打印数量
 */
printNum?: number;
/**
 * 打印机编号
 */
sn?: string;
}
/**
 * 会员等级卡价格体系新增对象
 */
export interface VipLevelCardPriceAddCmd {

/**
 * 会员卡有效时长,默认单位'月'
 */
buyDuration?: number;
/**
 * 会员卡原价
 */
price: number;
/**
 * 显示状态 1-展示，0-隐藏
 */
showStatus: boolean;
/**
 * 会员卡折扣价（实际销售的价格）
 */
realPrice: number;
}
/**
 * 预定记录详情-扫码开台查询预定信息时候用
 */
export interface BookRecordDetailForCheckinDTO {

/**
 * 预定人账户ID
 */
bookMemberId?: number;
/**
 * 取消时间，取消状态下有值
 */
cancelTime?: string;
/**
 * 预定台位ID
 */
barTableId?: number;
/**
 * 预定编号，给用户看的可读的编号
 */
bookNo?: string;
/**
 * 预定到店人数
 */
bookArrivedPerNum?: number;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 预定区域名称
 */
areaName?: string;
/**
 * 预定人操作人名称
 */
bookOpName?: string;
/**
 * 开台套名称
 */
checkinPackGoodsName?: string;
/**
 * 开台时间，已完成状态下会有开台时间
 */
checkinTime?: string;
/**
 * 预定客户经理ID
 */
cusManagerId?: number;
/**
 * 预定记录id
 */
id?: number;
/**
 * 预定电话
 */
bookCustomerPhone?: string;
/**
 * 预定人类型:1-会员 2-粉丝 3-散客
 */
bookCustomerType?: '1'|'2'|'3';
/**
 * 预定操作人类型,1-客户 2-客户经理 3-控台员
 */
bookOpType?: '1'|'2'|'3'|'4'|'5'|'6';
/**
 * 预定人名称
 */
bookCustomerName?: string;
/**
 * 预定客户经理名称
 */
cusManagerName?: string;
/**
 * 过期超时时间
 */
expireDateTime?: string;
/**
 * 取消时间
 */
cancelOpId?: number;
/**
 * 预定到达时间
 */
bookArrivedTime?: string;
/**
 * 取消操作人类型,1-客户 2-客户经理 3-服务员 4-控台员 5-系统
 */
cancelOpType?: '1'|'2'|'3'|'4'|'5'|'6';
/**
 * 0-已取消 1-已预定 2-已过期 3-已完成
 */
bookStatus?: '0'|'1'|'2'|'3';
/**
 * 台位类型名称
 */
barTableTypeName?: string;
/**
 * 预定操作人id
 */
bookOpId?: number;
/**
 * 低消套餐ID
 */
checkinPackGoodsId?: number;
/**
 * 预定区域ID
 */
areaId?: number;
/**
 * 预定日期
 */
bookDate?: string;
/**
 * 台位名称
 */
barTableName?: string;
/**
 * 台位类型ID
 */
barTableTypeId?: number;
/**
 * 取消操作人名称
 */
cancelOpName?: string;
/**
 * 预定备注
 */
bookRemark?: string;
}
/**
 * 区域删除
 */
export interface BarAreaRemoveCmd {

/**
 * ID
 */
id: number;
}
/**
 * 通过角色ID查询用户
 */
export interface SysRoleByIdQuery {

/**
 * 角色ID
 */
id?: number;
}
/**
 * 酒吧分店信息
 */
export interface ClubShopInfoDTO {

/**
 * 酒吧描述
 */
clubDesc?: string;
/**
 * 酒吧工商注册名称
 */
clubRegistName?: string;
/**
 * 经度
 */
lnt?: string;
/**
 * 酒吧分店id
 */
id?: number;
/**
 * 纬度
 */
lat?: string;
/**
 * 街道地址
 */
address?: string;
/**
 * 联系电话
 */
servicePhone?: string;
/**
 * 酒吧店名
 */
name?: string;
/**
 * 酒吧状态中文描述
 */
clubStatusDesc?: string;
/**
 * 酒吧状态 0-待开放 1-营业中 2-已关闭
 */
clubStatus?: number;
}
/**
 * 商品删除入参对象
 */
export interface GoodsRemoveCmd {

/**
 * 商品ID
 */
id?: number;
}
/**
 * 预定台位结果
 */
export interface BookBarTableResultDTO {

/**
 * 名称
 */
barTableName?: string;
/**
 * 预定台位ID
 */
barTableId?: number;
/**
 * 预定编号,可读性高，给人看的
 */
bookNo?: string;
/**
 * 预定recordId
 */
bookRecordId?: number;
}
/**
 * No description
 */
export interface VoiceRequest {

/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * 支付金额
 */
money?: number;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 打印机编号
 */
sn?: string;
/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 支付方式41~55：支付宝 41、微信 42、云支付 43、银联刷卡 44、银联支付 45、会员卡消费 46、会员卡充值 47、翼支付 48、成功收款 49、嘉联支付 50、壹钱包 51、京东支付 52、快钱支付 53、威支付 54、享钱支付 55
 */
payType?: number;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
/**
 * 支付与否 59~61：退款 59 到账 60 消费 61
 */
payMode?: number;
}
/**
 * 区域列表item
 */
export interface BarAreaListItemDTO {

/**
 * 名称
 */
name?: string;
/**
 * 更新人名称
 */
updateName?: string;
/**
 * 是否启用
 */
enableStatus?: boolean;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 展示顺序，越小越靠前，默认100
 */
displayOrder?: number;
/**
 * 创建人名称
 */
createName?: string;
/**
 * 更新时间
 */
updateTime?: string;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 是否可以预定
 */
openBook?: boolean;
/**
 * 酒吧ID
 */
clubId?: number;
/**
 * 是否C端可见
 */
publicOpen?: boolean;
/**
 * id
 */
id?: number;
/**
 * 创建人ID
 */
createId?: number;
}
/**
 * 吧台类型更新
 */
export interface BarTableTypeUpdateCmd {

/**
 * 更新ID
 */
id: number;
/**
 * 名称
 */
name: string;
/**
 * 显示顺序，不传则默认100，越小越前
 */
displayOrder?: number;
}
/**
 * No description
 */
export interface MenuTree {

/**
 * 排序
 */
orderNum?: number;
/**
 * 创建者名称
 */
createName?: string;
/**
 * 类型   1：一级目录topmenu   2：菜单submenu   3：按钮button
 */
menuType?: number;
/**
 * 类型   1：系统功能   2：业务功能
 */
funType?: number;
/**
 * 菜单名称
 */
title?: string;
/**
 * 授权字符串,
 */
perms?: string;
parentId?: number;
/**
 * 修改者名称
 */
updateName?: string;
/**
 * 1:系统菜单,2 公司菜单
 */
menuGroup?: number;
/**
 * 修改者ID
 */
updateId?: number;
/**
 * 菜单key
 */
menuKey?: string;
/**
 * 下级目录
 */
children?: TreeNodeBox[];
/**
 * 菜单图标
 */
icon?: string;
/**
 * 备注说明
 */
remark?: string;
id?: number;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 菜单相对路径path
 */
path?: string;
/**
 * 创建者ID
 */
createId?: number;
/**
 * 修改时间
 */
updateTime?: string;
}
/**
 * 转台结果
 */
export interface ChecktransResultDTO {

/**
 * 转台记录Id
 */
recordId?: number;
/**
 * 转台记录编号，给人看的，可读性高
 */
transNo?: string;
}
/**
 * No description
 */
export interface GoodsVipLevelCardDiscountDTO {

/**
 * 会员价
 */
vipPrice?: number;
/**
 * 会员卡名
 */
vipLevelCardName?: string;
/**
 * 会员卡ID
 */
vipLevelCardId?: number;
}
/**
 * 吧台类型新增
 */
export interface BarTableTypeSaveCmd {

/**
 * 显示顺序，不传则默认100，越小越前
 */
displayOrder?: number;
/**
 * 名称
 */
name: string;
}
/**
 * 商品统计分类分页列表对象
 */
export interface GoodsStatisTypePageListDTO {

/**
 * 创建时间
 */
createTime?: string;
/**
 * 排序号
 */
displayOrder?: number;
/**
 * 状态 true-正常，false-禁用
 */
status?: boolean;
/**
 * 创建人
 */
createName?: string;
/**
 * 数据ID
 */
id?: number;
/**
 * 分类名
 */
name?: string;
}
/**
 * No description
 */
export interface BarTableBindingCmd {

/**
 * 营业日
 */
bizDate: string;
/**
 * 服务员列表
 */
waiters: BarTableBindingWaiterDTO[];
}
/**
 * 角色删除请求对象
 */
export interface SysRoleDeleteCmd {

/**
 * 角色ID
 */
id: number;
}
/**
 * 清台结果
 */
export interface CheckoutResultDTO {

/**
 * 清台记录编号，给人看的，可读性好点
 */
checkoutNo?: string;
/**
 * 清台记录Id
 */
recordId?: number;
}
/**
 * 吧台新增
 */
export interface BarTableSaveCmd {

/**
 * 是否启用
 */
enableStatus?: boolean;
/**
 * 支持人数
 */
supportNum: number;
/**
 * c端用户可见
 */
publicOpen: boolean;
/**
 * 是否虚拟台位
 */
virtualTable?: boolean;
/**
 * 开台套餐ID
 */
checkinPackGoodsId?: number;
/**
 * 显示顺序，不传则默认100，越小越前
 */
displayOrder?: number;
/**
 * 台位类型ID
 */
tableTypeId: number;
/**
 * 会员优惠模式1-按开台人优惠 2-按下单人优惠
 */
vipDiscountMode: '1'|'2';
/**
 * 区域ID
 */
areaId: number;
/**
 * 名称
 */
name: string;
}
/**
 * 服务员DTO
 */
export interface WaiterDTO {

/**
 * 联系电话
 */
mobile?: string;
/**
 * 服务员姓名
 */
waiterName?: string;
/**
 * 服务员ID
 */
waiterId?: number;
/**
 * 角色名称
 */
roleNames?: string;
}
/**
 * No description
 */
export interface VipActiveCmd {

/**
 * 粉丝ID
 */
memberId: number;
}
/**
 * 用户搜索结果
 */
export interface MemberSearchResDTO {

/**
 * 用户名称
 */
name?: string;
/**
 * 是否vip(未过期不管激活没激活)
 */
vip?: boolean;
/**
 * 会员是否已过期
 */
vipExpired?: boolean;
/**
 * 用户ID
 */
id?: number;
/**
 * 用户电话
 */
mobile?: string;
/**
 * 会员激活状态
 */
vipActiveStatus?: boolean;
/**
 * 会员卡ID
 */
vipCardId?: number;
/**
 * 会员卡名称
 */
vipCardName?: string;
/**
 * 会员卡等级
 */
vipCardLevel?: number;
}
/**
 * 会员等级卡展示状态编辑对象
 */
export interface VipLevelShowStatusEditCmd {

/**
 * 会员等级卡ID
 */
id?: number;
/**
 * 展示状态 1-展示，0-不展示
 */
showStatus?: boolean;
}
/**
 * 编辑打印机出品位置配置请求对象
 */
export interface PrinterPositionEditCmd {

/**
 * 打印机ID
 */
printerIds?: number[];
/**
 * 出品位置
 */
producePosition?: string;
/**
 * ID
 */
id?: number;
/**
 * 打印机份数
 */
printAmount?: number;
/**
 * 打印类型 1：后厨 2：收单 3：银台 4：存酒 5：取酒 6：充值
 */
printType?: number;
}
/**
 * 新增后台用户请求对象
 */
export interface SysUserAddCmd {

/**
 * 角色id列表
 */
roleIds: number[];
/**
 * 用户名
 */
username: string;
/**
 * 头像地址
 */
avatarUrl?: string;
/**
 * 管理酒吧id列表
 */
manageClubIds?: number[];
/**
 * 工号
 */
jobNo: string;
/**
 * 主酒吧id
 */
clubId?: number;
/**
 * 手机号
 */
mobile: string;
/**
 * 所属部门id列表
 */
departIds?: number[];
/**
 * 主部门名称
 */
departName?: string;
/**
 * 员工赠送额度
 */
balance?: number;
/**
 * 性别 1-男，2-女，3-其他
 */
gender: number;
/**
 * 密码
 */
password: string;
/**
 * 主部门id
 */
departId?: number;
/**
 * 姓名
 */
realName: string;
}
/**
 * No description
 */
export interface PrinterEditRequest {

/**
 * 打印机名称
 */
name?: string;
/**
 * 打印机编号
 */
sn?: string;
/**
 * 流量卡号码
 */
cardno?: string;
/**
 * 功能模块
 */
functionModule?: string;
/**
 * 打印机识别码
 */
idcode?: string;
/**
 * ID
 */
id?: number;
/**
 * 打印数量
 */
printNum?: number;
/**
 * 打印机品牌
 */
printerBrand?: string;
/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 打印方式 1.整单 2.一品一单
 */
printMethod?: number;
/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
}
/**
 * 管理后台粉丝会员开通记录对象
 */
export interface VipManagerOpenRecordDTO {

/**
 * 开通记录ID
 */
id?: number;
/**
 * 开通时间
 */
openTime?: string;
/**
 * 会员卡类型(1开通2续费3升级4指定)
 */
buyCardType?: number;
/**
 * 会员等级名
 */
cardName?: string;
/**
 * 手机号
 */
mobile?: string;
/**
 * 订单编号
 */
orderNo?: string;
/**
 * 支付时间
 */
payTime?: string;
/**
 * 支付方式
 */
payType?: string;
/**
 * 实际价格（打折后实际售卖的价格）
 */
amount?: number;
/**
 * 会员卡开通时间
 */
createTime?: string;
/**
 * 客户经理
 */
exclusiveManagerName?: string;
/**
 * 昵称
 */
memberName?: string;
/**
 * 用户头像地址
 */
avatarUrl?: string;
/**
 * 会员卡购买月数
 */
buyDuration?: number;
}
/**
 * 会员列表统计信息
 */
export interface VipPageStatisDTO {

/**
 * 今日新增会员数量
 */
todayVipNum?: number;
/**
 * 会员总数
 */
totalVipNum?: number;
}
/**
 * 储值卡预付返回对象
 */
export interface StoredValueCardPayOrderDTO {

/**
 * 储值卡支付id
 */
storedValueCardPayId: number;
}
/**
 * 用户预定记录列表单项
 */
export interface MemberBookRecordListItemWebDTO {

/**
 * 预定台位ID
 */
barTableId?: number;
/**
 * 台位名称冗余
 */
barTableName?: string;
/**
 * 预定用户预定时客户经理ID
 */
cusManagerId?: number;
/**
 * 预定操作人ID
 */
bookOpId?: number;
/**
 * 预定到店人数
 */
bookArrivedPerNum?: number;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 预定操作人名称
 */
bookOpName?: string;
/**
 * 预定用户预定时客户经理name
 */
cusManagerName?: string;
/**
 * 预定人类型1-会员2-粉丝3-散客
 */
bookCustomerType?: '1'|'2'|'3';
/**
 * 预定操作人类型,1-客户 2-客户经理 3-服务员 4-前台
 */
bookOpType?: '1'|'2'|'3'|'4'|'5'|'6';
/**
 * 预定业务日
 */
bookBizDate?: string;
/**
 * 区域ID
 */
areaId?: number;
/**
 * 预定电话
 */
bookCustomerPhone?: string;
/**
 * 会员卡名称
 */
bookMemberVipCardName?: string;
/**
 * 区域名称
 */
areaName?: string;
/**
 * 预定编号，给用户看的可读的编号
 */
bookNo?: string;
/**
 * 0-已取消 1-已预定 2-已过期 3-已完成
 */
bookStatus?: '0'|'1'|'2'|'3';
/**
 * 预定到达时间
 */
bookArrivedTime?: string;
/**
 * 预定人名称
 */
bookCustomerName?: string;
/**
 * 预定人账户ID
 */
bookMemberId?: number;
/**
 * 预定自然日
 */
bookDate?: string;
/**
 * 预定记录id
 */
id?: number;
}
/**
 * 进件商户账户POS机新增请求对象
 */
export interface IncomeMchAccountPosAddCmd {

/**
 * 终端号
 */
terminalNo?: string;
/**
 * 进件商户账户ID
 */
accountId?: number;
/**
 * 门店ID，当绑定对象是门店时必传
 */
clubId?: number;
/**
 * 公司ID
 */
comId?: number;
/**
 * 设备编号
 */
equipmentNo?: string;
/**
 * 设备名称
 */
equipmentName?: string;
}
/**
 * No description
 */
export interface SetVoiceTypeRequest {

/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 声音类型： 0真人语音（大） 1真人语音（中） 2真人语音（小） 3 嘀嘀声  4 静音
 */
voiceType?: number;
/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * 打印机编号
 */
sn?: string;
}
/**
 * 支付单关联订单返回对象
 */
export interface TradePayOrderDTO {

/**
 * 订单金额
 */
orderAmount?: number;
/**
 * 支付单关联订单id
 */
id?: number;
/**
 * 订单id
 */
orderId?: number;
/**
 * 订单编号
 */
orderNo?: string;
}
/**
 * 查询系统角色列表请求对象
 */
export interface SysRolePageListQuery {

/**
 * 每页条数 10
 */
pageSize?: number;
/**
 * 第几页 1
 */
pageNum?: number;
/**
 * 角色名称
 */
roleName?: string;
/**
 * 非必填 翻页前最后一条ID，填了后端如果支持这个字段,则可以优化查询速度
 */
lastId?: number;
/**
 * 非必填 排序字段，填了后端如果支持这个字段,则会按这个排序 e.g. id,name,有多个则逗号分隔
 */
order?: string;
/**
 * 非必填 例子asc或desc 代表升序或者降序，默认降序
 */
sort?: string;
}
/**
 * 台位类型详情
 */
export interface BarTableTypeDetailDTO {

/**
 * 更新时间
 */
updateTime?: string;
/**
 * 名称
 */
name?: string;
/**
 * 是否启用
 */
enableStatus?: boolean;
/**
 * 创建时间
 */
createTime?: string;
/**
 * ID
 */
id?: number;
/**
 * 创建人
 */
createName?: string;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 显示顺序
 */
displayOrder?: number;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 更新人
 */
updateName?: string;
}
/**
 * 分类列表
 */
export interface GoodsTypeListDTO {

/**
 * 分类ID
 */
id?: number;
/**
 * 类型
 */
type?: number;
/**
 * 商品列表
 */
goodsList?: GoodsSaleListDTO[];
/**
 * 状态
 */
status?: boolean;
/**
 * 分类名
 */
name?: string;
}
/**
 * No description
 */
export interface TreeNodeBox {

parentId?: number;
/**
 * 菜单名称
 */
title?: string;
id?: number;
/**
 * 下级目录
 */
children?: TreeNodeBox[];
/**
 * 类型   1：一级目录topmenu   2：菜单submenu   3：按钮button
 */
menuType?: number;
}
/**
 * 支付单明细返回对象
 */
export interface TradePayDetailDTO {

/**
 * 支付成功时间
 */
successTime?: string;
/**
 * 该次支付金额，单位分
 */
payAmount?: number;
/**
 * 支付明细id
 */
id?: number;
/**
 * 支付方式(CASH,UNIFIED,WALLET_CARD,STORED_VALUE_CARD)
 */
payType?: 'ALIPAY'|'CASH'|'MIXED'|'NFC'|'SDP'|'STORED_VALUE_CARD'|'UPACP'|'WALLET_CARD'|'WX';
tradePayStatus?: 'CLOSED'|'PAY_FAIL'|'PAY_ING'|'PAY_INIT'|'PAY_SUCCESS'|'REFUND_ING'|'REFUND_SUCCESS';
/**
 * 支付方式
 */
tradeType?: 'ALIPAY_APP'|'ALIPAY_JSAPI'|'ALIPAY_LITE'|'ALIPAY_PC'|'ALIPAY_PERIOD'|'ALIPAY_QR'|'ALIPAY_SCAN'|'ALIPAY_WAP'|'SHENGPAY_AGGRE'|'SHENGPAY_APP'|'SHENGPAY_POS'|'SHENGPAY_POS_36'|'SHENGPAY_POS_57'|'SHENGPAY_POS_85'|'SHENGPAY_POS_C1'|'SHENGPAY_POS_C7'|'SHENGPAY_POS_C8'|'SHENGPAY_POS_Z1'|'SHENGPAY_WAP'|'UPACP_APP'|'UPACP_B2B'|'UPACP_PC'|'UPACP_QR'|'UPACP_QR_C'|'UPACP_QR_D'|'UPACP_QUICK'|'UPACP_QUICK_C'|'UPACP_QUICK_D'|'UPACP_SCAN'|'UPACP_SCAN_C'|'UPACP_SCAN_D'|'UPACP_WAP'|'WX_APP'|'WX_JSAPI'|'WX_LITE'|'WX_NATIVE'|'WX_PERIOD'|'WX_SCAN'|'WX_SCORE'|'WX_WAP';
/**
 * 交易金额
 */
tradeAmount?: number;
/**
 * 支付机构
 */
tradeOrgType?: string;
/**
 * pos机名称
 */
deviceName?: string;
}
/**
 * 公司列表item
 */
export interface CompanyListItemDTO {

/**
 * 创建名称
 */
createName?: string;
/**
 * 创建ID
 */
createId?: number;
/**
 * 移动收单账户名称
 */
acquiringAccountName?: string;
/**
 * 设备收单账户绑定ID
 */
equipmentAccountBindId?: number;
/**
 * 启用状态 1-启用 2-停用
 */
enableStatus?: boolean;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 设备收单账户ID
 */
equipmentAccountId?: number;
/**
 * 更新时间
 */
updateTime?: string;
/**
 * 租户唯一名称(账户后缀)
 */
tenantSuffixName?: string;
/**
 * 更新人名称
 */
updateName?: string;
/**
 * 公司logo
 */
logo?: string;
/**
 * 公司应用名称
 */
name?: string;
/**
 * 设备收单账户名称
 */
equipmentAccountName?: string;
/**
 * 移动收单账户绑定ID
 */
acquiringAccountBindId?: number;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 移动收单账户ID
 */
acquiringAccountId?: number;
/**
 * 当前工号序列
 */
jobNo?: number;
/**
 * 公司ID
 */
id?: number;
}
/**
 * 日期范围
 */
export interface DateRangeDTO {

/**
 * 日范围end
 */
endDate?: string;
/**
 * 日范围start
 */
startDate?: string;
/**
 * 当前营业日日期
 */
curBizDate?: string;
}
/**
 * 进件商户账户编辑请求对象
 */
export interface IncomeMchAccountEditCmd {

/**
 * 收单银行名称卡号
 */
bankInfo?: string;
/**
 * 公司ID
 */
comId?: number;
/**
 * 商户类型 企业：ENTERPRISE 个体工商户：INDIVIDUAL 小微商户：PERSONAL
 */
subjectType?: string;
/**
 * 收单机构类型，SHENG_PAY
 */
acquiringOrg?: string;
/**
 * 收单账户子商户号
 */
subMchId?: string;
/**
 * 收单机构名称：盛付通
 */
acquiringOrgName?: string;
/**
 * 银行账户类型 B:对公,C:对私
 */
bankAccountType?: string;
/**
 * 门店ID，当绑定对象是门店时必传
 */
clubId?: number;
/**
 * 收单账户ID
 */
accountId?: number;
/**
 * 收单账户名称
 */
acquiringAccountName?: string;
}
/**
 * 单品详情
 */
export interface GoodsSingleDetailDTO {

/**
 * 商品ID
 */
id?: number;
/**
 * 商品统计类型ID
 */
goodsStatisTypeId: number;
/**
 * 优惠状态
 */
discountStatus: boolean;
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 存酒规则
 */
depositRuleId?: number;
/**
 * 商品统计类型名称
 */
goodsStatisTypeName: string;
/**
 * 出品位置
 */
producePositionId: number;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 销售结束时间
 */
saleEndTime: string;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 库存数量
 */
stockNum: number;
/**
 * 商品名
 */
name: string;
/**
 * 销售开始时间
 */
saleStartTime: string;
/**
 * 排序号 每个分类下唯一
 */
displayOrder: number;
/**
 * 存酒是否拍照
 */
depositImage?: boolean;
/**
 * 商品类型ID列表
 */
goodsTypeIds: number[];
/**
 * 原价 单位-分
 */
originalPrice: number;
/**
 * 销售业绩金额 默认为商品原价
 */
salesPerformancePrice?: number;
/**
 * 存酒类型
 */
depositRuleType?: number;
/**
 * 会员卡优惠信息
 */
vipLevelCardDiscount?: GoodsVipLevelCardDiscountDTO[];
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
/**
 * 商品图片
 */
image: string;
}
/**
 * 会员等级卡列表
 */
export interface VipLevelCardListDTO {

/**
 * 名称
 */
name?: string;
/**
 * ID
 */
id?: number;
/**
 * 等级
 */
level?: number;
}
/**
 * 商品状态变更
 */
export interface ChangeGoodsGiveStatusCmd {

/**
 * 商品ID
 */
id?: number;
/**
 * 赠送状态
 */
giveStatus?: boolean;
}
/**
 * 重置二维码
 */
export interface BarTableQrCodeResetCmd {

/**
 * ID
 */
id: number;
}
/**
 * No description
 */
export interface StoredValueCardSetting {

managerPhone?: string;
updateTime?: string;
id?: number;
createTime?: string;
updateName?: string;
activeVerifyType?: number;
managerName?: string;
rechargeVerifyType?: number;
updateId?: number;
createId?: number;
comId?: number;
createName?: string;
}
/**
 * No description
 */
export interface DataScreenVipCardSaleDTO {

/**
 * 今日新增会员
 */
todayVipNum?: number;
/**
 * 总会员数
 */
totalVipNum?: number;
}
/**
 * 门店工作人员搜索结果
 */
export interface EmployeeSearchResDTO {

/**
 * 用户电话
 */
mobile?: string;
/**
 * 用户名称
 */
name?: string;
/**
 * 用户ID
 */
id?: number;
}
/**
 * 公司详情
 */
export interface CompanyDetailDTO {

/**
 * 公司应用logo
 */
logo?: string;
/**
 * 营业执照
 */
businessLicense?: string;
/**
 * 工商注册地址
 */
regAddress?: string;
/**
 * 工商注册名称
 */
regName?: string;
/**
 * 法人身份证正面
 */
legalPersonIdcardHead?: string;
/**
 * 租户唯一名称(账户后缀)
 */
tenantSuffixName?: string;
/**
 * 启用状态 1-启用 2-停用
 */
enableStatus?: boolean;
/**
 * C端用户小程序密钥
 */
wxminiSecret?: string;
/**
 * 统一社会信用代码
 */
usci?: string;
/**
 * C端用户公众号ID
 */
wxpubAppId?: string;
/**
 * C端用户小程序ID
 */
wxminiAppId?: string;
/**
 * 联系人电话
 */
contactPhone?: string;
/**
 * 管理端小程序密钥
 */
wxminiManageSecret?: string;
/**
 * 管理员账户名(不带账户后缀)
 */
comAdminAccountName?: string;
/**
 * 联系人名称
 */
contactPerson?: string;
/**
 * 联系人邮件
 */
contactEmail?: string;
/**
 * 法人名称
 */
legalPerson?: string;
/**
 * 公司应用名称
 */
name?: string;
/**
 * 管理端小程序app
 */
wxminiManageAppId?: string;
/**
 * C端用户公众号密钥
 */
wxpubSecret?: string;
/**
 * 法人身份证背面
 */
legalPersonIdcardBack?: string;
/**
 * 公司ID
 */
id?: number;
}
/**
 * 新增打印机出品位置配置请求对象
 */
export interface PrinterPositionAddCmd {

/**
 * 打印类型 1：后厨 2：收单 3：银台 4：存酒 5：取酒 6：充值
 */
printType?: number;
/**
 * 打印机ID
 */
printerIds?: number[];
/**
 * 出品位置
 */
producePosition?: string;
}
/**
 * No description
 */
export interface StoredValueCardAddCMD {

/**
 * 管理员电话
 */
managerPhone: string;
/**
 * 充值验证方式(0无需验证,1需要短信验证)
 */
rechargeVerifyType: number;
/**
 * 管理员名称
 */
managerName: string;
/**
 * 开卡验证方式(0无需验证,1需要短信验证)
 */
activeVerifyType: number;
}
/**
 * 后台用户修改状态请求对象
 */
export interface SysUserChangeStatusCmd {

/**
 * 用户id
 */
id: number;
/**
 * 状态(1启用0禁用)
 */
status: number;
}
/**
 * 会员等级卡列表返回对象
 */
export interface VipLevelPageDTO {

/**
 * 创建人名
 */
createName?: string;
/**
 * 默认购买有效期/月，2月就是课购买2月
 */
buyDuration?: number;
/**
 * 会员卡等级
 */
level?: number;
/**
 * 会员卡ID
 */
id?: number;
/**
 * 是否自动激活 1-是， 0-否
 */
autoActive?: boolean;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 会员卡原价
 */
price?: number;
/**
 * 售卖状态 1-可售，0-不可售
 */
saleStatus?: boolean;
/**
 * 展示状态 1-展示，0-隐藏
 */
showStatus?: boolean;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 会员卡名称
 */
name?: string;
}
/**
 * 营业数据统计图DTO
 */
export interface BusinessDataImagesDTO {

/**
 * 金额数据(元)
 */
moneyList?: number[];
/**
 * 时间数据
 */
dateList?: string[];
}
/**
 * 修改门店状态club
 */
export interface EnableClubCmd {

/**
 * 公司ID
 */
comId: number;
/**
 * 门店ID
 */
id: number;
/**
 * 门店状态 club状态 0-待开放,1-营业中,2-已关闭,3-内测
 */
clubStatus: '0'|'1'|'2';
}
/**
 * No description
 */
export interface PrinterConfig {

printerBrand?: string;
id?: number;
updateId?: number;
snNo?: string;
printerName?: string;
createTime?: string;
trafficCard?: string;
printMethod?: number;
createId?: number;
updateTime?: string;
createName?: string;
printNum?: number;
updateName?: string;
functionModule?: string;
comId?: number;
clubId?: number;
}
/**
 * 新增套餐包含的单品信息
 */
export interface PackGoodsNumAddCmd {

/**
 * 商品ID
 */
goodsId: number;
/**
 * 排序号
 */
displayOrder: number;
/**
 * 商品数量
 */
goodsNum: number;
}
/**
 * No description
 */
export interface PrinterSnRequestItem {

/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * 打印机编号
 */
sn?: string;
/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
}
/**
 * 商品状态变更
 */
export interface ChangeGoodsCommissionStatusCmd {

/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 商品ID
 */
id?: number;
}
/**
 * 台位赠送订单详情
 */
export interface BarTableGiftOrderListItemDTO {

/**
 * 创建人
 */
createName?: string;
/**
 * 台位名称
 */
barTableName?: number;
/**
 * 赠送订单编号，展示给人看的编号
 */
orderNo?: string;
/**
 * 主单总金额分
 */
realTotalAmount?: number;
/**
 * 台位ID
 */
barTableId?: number;
/**
 * 赠送订单ID
 */
id?: number;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 开台ID
 */
barTableCheckinId?: number;
}
/**
 * 新增单品对象
 */
export interface SingleGoodsEditCmd {

/**
 * 商品图片
 */
image: string;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 优惠状态
 */
discountStatus: boolean;
/**
 * 商品统计类型名称
 */
goodsStatisTypeName: string;
/**
 * 出品位置
 */
producePositionId: number;
/**
 * 销售结束时间
 */
saleEndTime?: string;
/**
 * 存酒是否拍照
 */
depositImage: boolean;
/**
 * 销售开始时间
 */
saleStartTime?: string;
/**
 * 存酒规则
 */
depositRuleId: number;
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 商品名
 */
name: string;
/**
 * 商品类型ID列表
 */
goodsTypeIds: number[];
/**
 * 排序号 每个分类下唯一
 */
displayOrder: number;
/**
 * 销售业绩金额 默认为商品原价
 */
salesPerformancePrice?: number;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 存酒类型
 */
depositRuleType: number;
/**
 * 商品统计类型ID
 */
goodsStatisTypeId: number;
/**
 * 商品ID
 */
id?: number;
/**
 * 原价 单位-分
 */
originalPrice: number;
/**
 * 会员卡优惠信息
 */
vipLevelCardDiscount?: GoodsVipLevelCardDiscountDTO[];
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
}
/**
 * No description
 */
export interface DataScreenBarTableStatisticDTO {

/**
 * 开台超时总数
 */
checkinExpiredNum?: number;
/**
 * 当前统计信息所属工作日 yyyy-MM-dd
 */
workDate?: string;
/**
 * 当天开台总数
 */
checkinNum?: number;
/**
 * 累计预定次数
 */
bookccumulativeNum?: number;
/**
 * 空台总数
 */
emptyNum?: number;
/**
 * 预留总数
 */
holdNum?: number;
/**
 * 累计开台次数
 */
checkinAccumulativeNum?: number;
/**
 * 预定总数
 */
bookNum?: number;
/**
 * 翻台率1.7.0版本新增,返回200.23则为翻台率200.23%
 */
tableReCheckinRate?: string;
/**
 * 台位总数
 */
totalNum?: number;
}
/**
 * No description
 */
export interface BarTableBindingDateCmd {

/**
 * 绑定列表
 */
bindingDateList: BarTableBindingCmd[];
}
/**
 * No description
 */
export interface CusAccountBalanceStatisDTO {

/**
 * 余额
 */
balance?: number;
/**
 * 赠送余额
 */
giftBalance?: number;
}
/**
 * No description
 */
export interface DataScreenBusinessDataDTO {

/**
 * 营业实收金额
 */
actualAmount?: number;
/**
 * 赠送订单数量
 */
giftOrderNum?: number;
/**
 * 清账金额
 */
closeoutAmount?: number;
/**
 * 赠送金额
 */
giftOrderAmount?: number;
/**
 * 营业订单数量
 */
orderNum?: number;
/**
 * 退品金额
 */
refundAmount?: number;
/**
 * 退品订单数量
 */
refundOrderNum?: number;
/**
 * 营业总金额
 */
totalAmount?: number;
/**
 * 挂账金额
 */
onCreditAmount?: number;
/**
 * 挂账订单数量
 */
onCreditOrderNum?: number;
/**
 * 清账订单数量
 */
closeoutNum?: number;
}
/**
 * 台位详情
 */
export interface BarTableDetailDTO {

/**
 * 更新人ID
 */
updateId?: number;
/**
 * ID
 */
id?: number;
/**
 * 显示顺序，越小越在前，默认100
 */
displayOrder?: number;
/**
 * 开台套名称
 */
checkinPackGoodsName?: string;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * 低消套餐ID
 */
checkinPackGoodsId?: number;
/**
 * 创建人name
 */
createName?: string;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 更新人名字
 */
updateName?: string;
/**
 * 是否虚拟台位
 */
virtualTable?: boolean;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 台位名称
 */
name?: string;
/**
 * 二维码
 */
qrCode?: string;
/**
 * 会员优惠模式 1-按开台人优惠 2-按下单人优惠
 */
vipDiscountMode?: '1'|'2';
/**
 * 启用状态
 */
enableStatus?: boolean;
/**
 * 所属区域ID
 */
areaId?: number;
/**
 * c端用户可见
 */
publicOpen?: boolean;
/**
 * 支持人数
 */
supportNum?: number;
/**
 * 所属区域名称
 */
areaName?: string;
}
/**
 * 通用ID请求对象
 */
export interface IdRequest {

/**
 * ID
 */
id?: number;
}
/**
 * 售卖商品列表
 */
export interface GoodsSaleListDTO {

/**
 * 销售开始时间
 */
saleStartTime?: string;
/**
 * 商品ID
 */
id?: number;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport?: boolean;
/**
 * 存酒方案
 */
depositRuleId?: number;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport?: boolean;
/**
 * 销售结束时间
 */
saleEndTime?: string;
/**
 * 存酒类型 1-不可存 2-整瓶 3-可半瓶
 */
depositRuleType?: number;
/**
 * 商品类型 1-单品，2-套餐
 */
classify?: number;
/**
 * 原价
 */
originalPrice?: number;
/**
 * 商品名
 */
name?: string;
/**
 * 优惠状态
 */
discountStatus?: boolean;
/**
 * 售罄状态
 */
sellOutStatus?: boolean;
/**
 * 存酒是否拍照
 */
depositImage?: boolean;
/**
 * 优惠信息
 */
vipLevelCardDiscount?: string;
/**
 * 商品图
 */
image?: string;
}
/**
 * 新增公司
 */
export interface AddCompanyCmd {

/**
 * 微信公众号appId
 */
wxpubAppId?: string;
/**
 * 营业执照
 */
businessLicense: string;
/**
 * 公司注册名称
 */
regName: string;
/**
 * 微信小程序appId
 */
wxminiAppId: string;
/**
 * 公司应用名(面对客户)，新增后不能修改
 */
name: string;
/**
 * 公司管理员账户密码(给后台传MD5后数据)
 */
comAdminAccountPasswd: string;
/**
 * 社会统一信用代码
 */
usci: string;
/**
 * 法人身份证正面
 */
legalPersonIdcardHead: string;
/**
 * 微信公众号密钥
 */
wxpubSecret?: string;
/**
 * 法人名字
 */
legalPerson: string;
/**
 * 联系人名字
 */
contactPerson: string;
/**
 * 租户名(唯一账户后缀)，新增后不能修改
 */
tenantSuffixName: string;
/**
 * 联系电话
 */
contactPhone: string;
/**
 * 应用logo
 */
logo: string;
/**
 * 公司管理员账户名(不包含后缀，当前建议取名方式comadmin,后期随机生成8位数字)
 */
comAdminAccountName: string;
/**
 * 微信管理端小程序密钥
 */
wxminiManageSecret?: string;
/**
 * 公司注册地址
 */
regAddress: string;
/**
 * 联系邮箱
 */
contactEmail?: string;
/**
 * 法人身份证背面
 */
legalPersonIdcardBack: string;
/**
 * 微信小程序密钥
 */
wxminiSecret: string;
/**
 * 微信管理端小程序appId
 */
wxminiManageAppId?: string;
}
/**
 * 启停company
 */
export interface EnableCompanyCmd {

/**
 * 启停状态
 */
enableStatus: boolean;
/**
 * 公司ID
 */
id: number;
}
/**
 * 套餐详情
 */
export interface GoodsPackDetailDTO {

/**
 * 商品类型ID列表
 */
goodsTypeIds: number[];
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 商品ID
 */
id?: number;
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
/**
 * 销售结束时间
 */
saleEndTime: string;
/**
 * 销售开始时间
 */
saleStartTime: string;
/**
 * 原价 单位-分
 */
originalPrice: number;
/**
 * 销售业绩金额 默认为商品原价
 */
salesPerformancePrice?: number;
/**
 * 套餐包含的商品列表
 */
goodsItem: GoodsPackDetailItemDTO[];
/**
 * 存酒类型
 */
depositRuleType?: number;
/**
 * 存酒规则
 */
depositRuleId?: number;
/**
 * 存酒是否拍照
 */
depositImage?: boolean;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 排序号 每个分类下唯一
 */
displayOrder: number;
/**
 * 会员卡优惠信息
 */
vipLevelCardDiscount?: GoodsVipLevelCardDiscountDTO[];
/**
 * 优惠状态
 */
discountStatus: boolean;
/**
 * 商品名
 */
name: string;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 商品图片
 */
image: string;
}
/**
 * No description
 */
export interface OrderStatisticsResponse {

}
/**
 * 储值卡充值确认对象
 */
export interface CardRechargeConfirmCmd {

/**
 * 卡id
 */
cardId?: number;
/**
 * 充值金额
 */
rechargeAmount?: number;
}
/**
 * 预定规则详情
 */
export interface BarTableBookRuleAdminDTO {

/**
 * 可预约结束时间 20:00
 */
bookTimeEnd?: string;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 创建人
 */
createName?: string;
/**
 * 更新时间
 */
updateTime?: string;
/**
 * 可预约开始时间 19:00
 */
bookTimeStart?: string;
/**
 * 关闭预约的情况下，可以展示给用户看的提示信息
 */
noBookAlert?: string;
/**
 * 营业开始时间,20:00:00
 */
workTimeStart?: string;
/**
 * 需提前预约分钟数
 */
bookEarlyMin?: number;
/**
 * 可提前预约天数，最小0
 */
bookEarlyDayNum?: number;
/**
 * vip可预约开始时间 19:00
 */
vipBookTimeStart?: string;
/**
 * 营业截至时间,03:00:00
 */
workTimeEnd?: string;
/**
 * ID
 */
id?: number;
/**
 * vip可预约结束时间 22:00
 */
vipBookTimeEnd?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 创建人
 */
updateName?: string;
/**
 * 创建人ID
 */
updateId?: number;
/**
 * 是否全局允许预约
 */
canBook?: boolean;
}
/**
 * 区域详情
 */
export interface BarAreaDetailDTO {

/**
 * 是否C端可见
 */
publicOpen?: boolean;
/**
 * 名称
 */
name?: string;
/**
 * 是否可以预定
 */
openBook?: boolean;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 更新人名称
 */
updateName?: string;
/**
 * 展示顺序，越小越靠前，默认100
 */
displayOrder?: number;
/**
 * 酒吧ID
 */
clubId?: number;
/**
 * id
 */
id?: number;
/**
 * 创建人名称
 */
createName?: string;
/**
 * 是否启用
 */
enableStatus?: boolean;
/**
 * 更新时间
 */
updateTime?: string;
/**
 * 更新人ID
 */
updateId?: number;
}
/**
 * 商品售罄状态变更
 */
export interface ChangeGoodsSellOutStatusCmd {

/**
 * 计佣状态
 */
sellOutStatus?: boolean;
/**
 * 商品ID
 */
id?: number;
}
/**
 * club店铺详情
 */
export interface ClubDetailDTO {

/**
 * 店铺负责人
 */
personInCharge?: string;
/**
 * 店铺ID
 */
id?: number;
/**
 * 对外客服电话
 */
servicePhone?: string;
/**
 * 创建人名称
 */
createName?: string;
/**
 * 更新人名称
 */
updateName?: string;
/**
 * 店铺营业地址
 */
address?: string;
/**
 * 店铺负责人身份证正面
 */
personInChargeIdcardHead?: string;
/**
 * 所属公司ID
 */
comId?: number;
/**
 * 店铺名称
 */
name?: string;
/**
 * 店铺负责人身份证背面
 */
personInChargeIdcardBack?: string;
/**
 * 店铺负责人电话
 */
personInChargePhone?: string;
/**
 * 店铺状态 club状态 0-待开放,1-营业中,2-已关闭
 */
clubStatus?: '0'|'1'|'2';
/**
 * 创建人ID
 */
createId?: number;
/**
 * 店铺经度
 */
lnt?: string;
/**
 * 社会信用代码
 */
usci?: string;
/**
 * 工商注册名称
 */
clubRegistName?: string;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 店铺状态中文翻译
 */
clubStatusDesc?: string;
/**
 * 店铺营业执照
 */
clubBusinessLicense?: string;
/**
 * 店铺纬度
 */
lat?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 更新人时间
 */
updateTime?: string;
/**
 * 显示顺序,越小越靠前
 */
displayOrder?: number;
}
/**
 * No description
 */
export interface ChannelSourceListDTO {

/**
 * 更新人ID
 */
updateId?: number;
/**
 * 渠道名
 */
name?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 创建人名
 */
createName?: string;
/**
 * 更新人名
 */
updateName?: string;
/**
 * 更新时间
 */
updateTime?: string;
/**
 * 数据ID
 */
id?: number;
}
/**
 * No description
 */
export interface HttpResult {

/**
 * 消息
 */
msg: string;
/**
 * 编码
 */
code: number;
/**
 * 数据
 */
data?: object;
}
/**
 * 设置开台套
 */
export interface BarTableCheckinGoodsSetCmd {

/**
 * 商品ID,如果传null则是全部取消开台套
 */
goodsId?: number;
/**
 * 台位ID列表
 */
barTableIds: number[];
}
/**
 * 粉丝详情
 */
export interface MemberDetailDTO {

/**
 * 激活状态 true-激活 false-未激活
 */
activeStatus?: boolean;
/**
 * 注册日期
 */
createTime?: string;
/**
 * 用户头像地址
 */
avatarUrl?: string;
/**
 * 性别 1-男，2-女，3-其他
 */
gender?: number;
/**
 * 到期日期
 */
cardExpire?: string;
/**
 * 积分
 */
consumePoint?: number;
/**
 * 专属经理ID
 */
exclusiveManagerId?: number;
/**
 * 会员习惯
 */
habit?: string;
/**
 * 专属经理名
 */
exclusiveManagerName?: string;
/**
 * 累计消费
 */
cumulativeConsume?: number;
/**
 * 最近消费日期
 */
lastConsumeTime?: string;
/**
 * 粉丝ID
 */
memberId?: number;
/**
 * 手机号
 */
mobile?: string;
/**
 * 昵称
 */
nickName?: string;
/**
 * 用户会员等级
 */
cardName?: string;
/**
 * 是否内测用户
 */
betaTester?: boolean;
/**
 * 生日
 */
birthday?: string;
/**
 * 会员状态
 */
vipStatus?: boolean;
}
/**
 * 新增单品对象
 */
export interface PackGoodsAddCmd {

/**
 * 原价 单位-分
 */
originalPrice: number;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 商品名
 */
name: string;
/**
 * 销售开始时间
 */
saleStartTime?: string;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
/**
 * 销售业绩金额 默认为商品原价
 */
salesPerformancePrice?: number;
/**
 * 排序号 每个分类下唯一
 */
displayOrder: number;
/**
 * 优惠状态
 */
discountStatus: boolean;
/**
 * 商品类型ID列表
 */
goodsTypeIds: number[];
/**
 * 销售结束时间
 */
saleEndTime?: string;
/**
 * 会员卡优惠信息
 */
vipLevelCardDiscount?: GoodsVipLevelCardDiscountDTO[];
/**
 * 商品图片
 */
image: string;
/**
 * 套餐包含的商品列表
 */
goodsList: PackGoodsNumAddCmd[];
}
/**
 * 退款单明细返回对象
 */
export interface TradeRefundDetailDTO {

/**
 * 退款对应的三方平台交易ID
 */
refundTransactionId?: string;
/**
 * 应退金额
 */
tradeAmount?: number;
/**
 * pos机名称
 */
deviceName?: string;
/**
 * 支付方式(CASH,UNIFIED,WALLET_CARD,STORED_VALUE_CARD)
 */
payType?: 'ALIPAY'|'CASH'|'MIXED'|'NFC'|'SDP'|'STORED_VALUE_CARD'|'UPACP'|'WALLET_CARD'|'WX';
/**
 * 支付明细id
 */
id?: number;
/**
 * 退款状态1退款中2退款中3已退款4退款失败
 */
tradeRefundStatus?: 'REFUND_FAIL'|'REFUND_ING'|'REFUND_INIT'|'REFUND_SUCCESS';
remark?: string;
/**
 * 实际退款本金
 */
refundAmount?: number;
/**
 * 实际退款赠送金
 */
refundGiftAmount?: number;
}
/**
 * 台位类型简单信息
 */
export interface BarTableTypeInfoDTO {

/**
 * 显示排序
 */
displayOrder?: number;
/**
 * ID
 */
id?: number;
/**
 * 名称
 */
name?: string;
}
/**
 * 查询公司角色列表请求对象
 */
export interface ComRolePageListQuery {

/**
 * 角色名称
 */
roleName?: string;
/**
 * 公司id
 */
comId?: number;
/**
 * 非必填 翻页前最后一条ID，填了后端如果支持这个字段,则可以优化查询速度
 */
lastId?: number;
/**
 * 第几页 1
 */
pageNum?: number;
/**
 * 每页条数 10
 */
pageSize?: number;
/**
 * 非必填 例子asc或desc 代表升序或者降序，默认降序
 */
sort?: string;
/**
 * 非必填 排序字段，填了后端如果支持这个字段,则会按这个排序 e.g. id,name,有多个则逗号分隔
 */
order?: string;
}
/**
 * 台位营业日状态列表基本信息-目前app和web端通用
 */
export interface BarTableBizDateInfoAdminDTO {

/**
 * 开台时间
 */
checkinTime?: string;
/**
 * 预定用户的客户经理id
 */
bookCusmanagerId?: number;
/**
 * 是否虚拟台
 */
virtualTable?: boolean;
/**
 * 责任服务员名称,有分配则有值，没有则null
 */
bindWaiterName?: string;
/**
 * 开台关联服务员名称,没有则是空
 */
waiterName?: string;
/**
 * 当前信息所属工作日 yyyy-MM-dd
 */
bizDate?: string;
/**
 * 开台用户类型 1-会员 2-粉丝 3-散客
 */
customerType?: '1'|'2'|'3';
/**
 * 当前是否已被预留
 */
hold?: boolean;
/**
 * 会员优惠模式 1按开台人优惠 2按下单人优惠
 */
vipDiscountMode?: '1'|'2';
/**
 * 预定电话(用户信息脱敏)
 */
bookCustomerPhone?: string;
/**
 * 预留客户电话(用户信息脱敏)
 */
holdCustomerPhone?: string;
/**
 * 预留备注
 */
holdRemark?: string;
/**
 * 开台关联客户经理名称,没有则是空
 */
customerManagerName?: string;
/**
 * 支持人数
 */
supportNum?: number;
/**
 * 实际到场用户
 */
checkinPerNum?: number;
/**
 * 开台套名称
 */
checkinPackGoodsName?: string;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 台位名称，A-11,A-12
 */
name?: string;
/**
 * 责任服务员ID,有分配则有值，没有则null
 */
bindWaiterId?: number;
/**
 * 预定人客户类型1-会员2-粉丝3-散客
 */
bookCustomerType?: '1'|'2'|'3';
/**
 * 预定记录ID
 */
bookRecordId?: number;
/**
 * 预定人名称(用户信息脱敏)
 */
bookCustomerName?: string;
/**
 * 开台用户电话(用户信息脱敏)
 */
customerPhone?: string;
/**
 * 显示顺序，越小越在前,已排好序
 */
displayOrder?: number;
/**
 * 预留营业日期
 */
holdBizDate?: string;
/**
 * 当前开台状态 0-未开 1-已开
 */
checkin?: boolean;
/**
 * 开台时间为True的情况下，返回开台到现在的持续分钟数
 */
checkinDuration?: number;
/**
 * 当前是否已被预定
 */
book?: boolean;
/**
 * 预留记录ID
 */
holdRecordId?: number;
/**
 * 所属区域ID
 */
areaId?: number;
/**
 * 低消套餐ID
 */
checkinPackGoodsId?: number;
/**
 * 预定到达时间
 */
bookArrivedTime?: string;
/**
 * 开台关联客户经理ID,没有则是空
 */
customerManagerId?: number;
/**
 * 开台是否超时未清除
 */
checkinExpired?: boolean;
/**
 * 当前台位累计消费金额(分)，开台中的时候有值
 */
consumeAmount?: number;
/**
 * 所属区域名称
 */
areaName?: string;
/**
 * 当前开台记录ID
 */
checkinRecordId?: number;
/**
 * 预定用户的客户经理名称
 */
bookCusmanagerName?: string;
/**
 * 是否空台
 */
empty?: boolean;
/**
 * 台位在该营业日的状态 0-空台 1-已预定 2已开台 10异常
 */
bizDateTableStatus?: '0'|'1'|'2'|'3';
/**
 * 预留客户如果是注册用户，则返回注册用户ID
 */
holdMemberId?: number;
/**
 * 台位ID
 */
id?: number;
/**
 * 最后一次清台时间
 */
lastCheckoutTime?: string;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * 开台用户名称(用户信息脱敏)
 */
customerName?: string;
/**
 * 开台用户ID，如果未注册过app则没有id
 */
memberId?: number;
/**
 * 转台来源台位ID
 */
transFromTableId?: string;
/**
 * 转台来源台位Name
 */
transFromTableName?: string;
/**
 * 预定到达日期
 */
bookDate?: string;
/**
 * 转台记录ID
 */
transRecoredId?: number;
/**
 * 预留客户名称(用户信息脱敏)
 */
holdCustomerName?: string;
/**
 * 开台关联服务员id,没有则是空
 */
waiterId?: number;
}
/**
 * 区域新增
 */
export interface BarAreaSaveCmd {

/**
 * 显示顺序，不传则默认100，越小越前
 */
displayOrder?: number;
/**
 * 是否C端可见
 */
publicOpen?: boolean;
/**
 * 名称
 */
name: string;
/**
 * 是否启用
 */
enableStatus?: boolean;
}
/**
 * 台位列表item
 */
export interface BarTableListItemDTO {

/**
 * 创建人name
 */
createName?: string;
/**
 * 二维码
 */
qrCode?: string;
/**
 * 开台套名称
 */
checkinPackGoodsName?: string;
/**
 * vip台位优惠模式 1-按开台人优惠 2-按下单人优惠
 */
vipDiscountMode?: '1'|'2';
/**
 * 支持人数
 */
supportNum?: number;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 所属区域名称
 */
areaName?: string;
/**
 * 显示顺序，越小越在前，默认100
 */
displayOrder?: number;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 是否虚拟台位
 */
virtualTable?: boolean;
/**
 * ID
 */
id?: number;
/**
 * 启用状态
 */
enableStatus?: boolean;
/**
 * 所属区域ID
 */
areaId?: number;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * c端用户可见
 */
publicOpen?: boolean;
/**
 * 台位名称
 */
name?: string;
/**
 * 低消套餐ID
 */
checkinPackGoodsId?: number;
/**
 * 更新人名字
 */
updateName?: string;
}
/**
 * 商品状态变更
 */
export interface ChangeGoodsSaleStatusCmd {

/**
 * 商品ID
 */
id?: number;
/**
 * 上架状态
 */
saleStatus?: boolean;
}
/**
 * No description
 */
export interface BarTableBindingWaiterDTO {

/**
 * 台位ID列表
 */
barTableIds: number[];
/**
 * 服务员ID
 */
waiterId: number;
/**
 * 服务员名称
 */
waiterName: string;
}
/**
 * No description
 */
export interface ComBulletinDetailDTO {

/**
 * 公告类型
 */
bulletinType?: number;
/**
 * 主键
 */
id?: number;
/**
 * 标题
 */
title?: string;
/**
 * 公司名称
 */
comName?: number;
/**
 * 点单展示
 */
orderDisplay?: boolean;
/**
 * 首页展示1-展示,2-不展示
 */
display?: boolean;
/**
 * 逻辑删除 1（true）已删除， 0（false）未删除,预留
 */
deleted?: boolean;
/**
 * 跳转路径
 */
jumpPath?: string;
/**
 * 排序,数字越小越靠前
 */
orderNum?: number;
/**
 * 酒吧id
 */
clubName?: string;
/**
 * 公告内容H5
 */
content?: string;
/**
 * 公告图片地址
 */
titleImage?: string;
}
/**
 * No description
 */
export interface MerchantCombobox {

/**
 * 商户名
 */
merchantName?: string;
/**
 * 商户id
 */
merchantId?: number;
}
/**
 * 打印标签明细
 */
export interface PrintTagItemCmd {

/**
 * 商品单价
 */
orderPrice?: number;
/**
 * 商品名称
 */
goodsName?: string;
/**
 * 商品数量
 */
quantity?: number;
}
/**
 * 商品分页列表对象
 */
export interface GoodsPageListDTO {

/**
 * 类型 1-单品，2-套餐
 */
classify?: number;
/**
 * 排序号
 */
displayOrder?: number;
/**
 * 赠送状态
 */
giveStatus?: boolean;
/**
 * 商品ID
 */
id?: number;
/**
 * 出品位置
 */
producePositionId?: number;
/**
 * 售罄状态
 */
sellOutStatus?: boolean;
/**
 * 商品名
 */
name?: string;
/**
 * 成本价
 */
costPrice?: number;
/**
 * 原价
 */
originalPrice?: number;
/**
 * 销售状态
 */
saleStatus?: boolean;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 商品图片
 */
image?: string;
/**
 * 库存启用状态
 */
stockStatus?: boolean;
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
}
/**
 * 商品分类新增对象
 */
export interface GoodsTypeAddCmd {

/**
 * 活动菜单的渠道ID
 */
channelSourceId?: number;
/**
 * 分类名
 */
name?: string;
/**
 * 关联的台位区域ID
 */
barAreaIds?: number[];
/**
 * 类型 1-用户菜单，2-服务员菜单，3-活动菜单
 */
type: number;
/**
 * 服务员菜单绑定的服务员ID列表
 */
waiterIds?: number[];
/**
 * 显示类型 1-全部可见， 2-部分可见
 */
displayType?: number;
/**
 * 排序号 -不可重复
 */
displayOrder?: number;
}
/**
 * 台位更新
 */
export interface BarTableUpdateCmd {

/**
 * 名称
 */
name: string;
/**
 * 支持人数
 */
supportNum: number;
/**
 * c端用户可见
 */
publicOpen: boolean;
/**
 * 显示顺序，不传则默认100，越小越前
 */
displayOrder?: number;
/**
 * 是否虚拟台位
 */
virtualTable?: boolean;
/**
 * 区域ID
 */
areaId: number;
/**
 * 开台套餐ID
 */
checkinPackGoodsId?: number;
/**
 * 台位类型ID
 */
tableTypeId: number;
/**
 * 会员优惠模式1-按开台人优惠 2-按下单人优惠
 */
vipDiscountMode: '1'|'2';
/**
 * ID
 */
id: number;
}
/**
 * 打印机批量新增请求对象
 */
export interface PrinterSaveRequest {

/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 打印机请求项集合
 */
items?: PrinterRequestItem[];
/**
 * 芯烨云后台注册用户名
 */
user?: string;
}
/**
 * 商品分类编辑对象
 */
export interface GoodsTypeEditCmd {

/**
 * 排序号 -不可重复
 */
displayOrder: number;
/**
 * 活动菜单的渠道ID
 */
channelSourceId?: number;
/**
 * 关联的台位区域ID
 */
barAreaIds?: number[];
/**
 * 服务员菜单绑定的服务员ID列表
 */
waiterIds?: number[];
/**
 * 分类名
 */
name: string;
/**
 * 商品分类ID
 */
id: number;
/**
 * 显示类型 1-全部可见， 2-部分可见
 */
displayType?: number;
/**
 * 类型 1-用户菜单，2-服务员菜单，3-活动菜单
 */
type: number;
}
/**
 * 商品类型删除入参对象
 */
export interface GoodsTypeRemoveCmd {

/**
 * 商品类型ID
 */
id?: number;
}
/**
 * No description
 */
export interface DepartmentTree {

/**
 * 创建者ID
 */
createId?: number;
id?: number;
/**
 * 修改者ID
 */
updateId?: number;
/**
 * 类型   1：一级目录topmenu   2：菜单submenu   3：按钮button
 */
menuType?: number;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 公司租户ID
 */
comId?: number;
/**
 * 创建者名称
 */
createName?: string;
/**
 * com-公司级,club-店级
 */
orgLevelType?: string;
/**
 * 修改者名称
 */
updateName?: string;
/**
 * 部门名称
 */
departName?: string;
parentId?: number;
/**
 * 菜单名称
 */
title?: string;
/**
 * 公司租户ID
 */
clubId?: number;
/**
 * 下级目录
 */
children?: TreeNodeBox[];
/**
 * 修改时间
 */
updateTime?: string;
}
/**
 * No description
 */
export interface DataScreenTodayBusinessDataDTO {

/**
 * 今日实收营业额
 */
amountReceived?: number;
/**
 * 今日挂账金额
 */
onCreditAmount?: number;
}
/**
 * No description
 */
export interface DepositRuleCombobox {

id?: number;
name?: string;
}
/**
 * 开台结果
 */
export interface CheckinResultDTO {

/**
 * 开台记录编号，主要用于人看的可读性高的编号
 */
checkinNo?: string;
/**
 * 开台记录Id
 */
recordId?: number;
}
/**
 * 商品统计分类状态变更对象
 */
export interface GoodsStatisTypeStatusCmd {

/**
 * 状态 true-启用， false-禁用
 */
status: boolean;
/**
 * 商品统计分类ID
 */
id: number;
}
/**
 * No description
 */
export interface GiftOrderRecordQuery {

/**
 * 客户ID
 */
customerId?: number;
/**
 * 开台ID
 */
barTableCheckinId?: number;
/**
 * 查询时间
 */
queryDate?: string;
}
/**
 * No description
 */
export interface ChannelSourceEditCmd {

/**
 * 数据ID
 */
id: number;
/**
 * 渠道名
 */
name: string;
}
/**
 * 区域简单信息
 */
export interface BarAreaInfoDTO {

/**
 * 区域ID
 */
id?: number;
/**
 * 启用状态，1-启用 0-停用
 */
enableStatus?: boolean;
/**
 * 区域显示顺序，越小越靠前
 */
displayOrder?: number;
/**
 * 区域名称
 */
name?: string;
}
/**
 * 编辑后台用户请求对象
 */
export interface SysUserEditCmd {

/**
 * 主部门id
 */
departId?: number;
/**
 * 主酒吧id
 */
clubId?: number;
/**
 * 管理酒吧id列表
 */
manageClubIds?: number[];
/**
 * 用户id
 */
id: number;
/**
 * 密码
 */
password: string;
/**
 * 手机号
 */
mobile: string;
/**
 * 头像地址
 */
avatarUrl?: string;
/**
 * 主部门名称
 */
departName?: string;
/**
 * 所属部门id列表
 */
departIds?: number[];
/**
 * 员工赠送额度
 */
balance?: number;
/**
 * 性别 1-男，2-女，3-其他
 */
gender: number;
/**
 * 姓名
 */
realName: string;
/**
 * 角色id列表
 */
roleIds: number[];
/**
 * 工号
 */
jobNo: string;
}
/**
 * 退款单返回对象
 */
export interface TradeRefundDTO {

/**
 * 总应退金额
 */
totalTradeAmount?: number;
/**
 * 组合退款
 */
mixedRefund?: boolean;
/**
 * 商品简介 酒水退品
 */
subject?: string;
/**
 * 退款原因
 */
refundReason?: string;
/**
 * 退款状态1未退款2退款中3已退款4退款失败
 */
tradeRefundStatus?: 'REFUND_FAIL'|'REFUND_ING'|'REFUND_INIT'|'REFUND_SUCCESS';
/**
 * 退款成功时间
 */
successTime?: string;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * 退款单明细列表
 */
detailList?: TradeRefundDetailDTO[];
/**
 * 开台id
 */
barTableCheckinId?: number;
/**
 * 所属区域id
 */
barAreaId?: number;
/**
 * 台位名称
 */
barTableName?: string;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 所属区域名称
 */
barAreaName?: string;
/**
 * 下单粉丝id
 */
memberId?: number;
/**
 * 下单粉丝名称
 */
memberName?: string;
/**
 * 台位id
 */
barTableId?: number;
/**
 * 总实退金额
 */
totalRefundAmount?: number;
/**
 * 退款单id
 */
id?: number;
}
/**
 * 会员等级卡价格信息
 */
export interface VipLevelCardPriceInfoDTO {

/**
 * 会员卡原价
 */
price?: number;
/**
 * 会员卡购买时长
 */
buyDuration?: number;
/**
 * 会员等级卡价格体系ID
 */
id?: number;
/**
 * 会员卡实际价格
 */
realPrice?: number;
/**
 * 显示状态
 */
showStatus?: boolean;
}
/**
 * 台位操作日志
 */
export interface BarTableOpLogListItemDTO {

/**
 * 终端类型名称
 */
deviceTypeName?: string;
/**
 * 操作人ID
 */
opUserId?: number;
/**
 * 操作人类型名称
 */
opUserTypeName?: string;
/**
 * 操作内容
 */
tableOpContent?: string;
/**
 * 台位名称
 */
tableName?: string;
/**
 * 台位操作类型 1开台 2-清台 3-转入 4-转出 5-预留 6-关联会员 7-设置客户经理
 */
tableOpBizType?: '1'|'2'|'3'|'4'|'6'|'7'|'8';
/**
 * 操作时间
 */
createTime?: string;
/**
 * 日志记录ID
 */
id?: number;
/**
 * 操作对应的业务ID
 */
tableOpBizId?: number;
/**
 * 台位ID
 */
tableId?: number;
/**
 * 工作日
 */
bizDate?: string;
opUserType?: '1'|'2'|'3'|'4'|'5'|'6';
/**
 * 台位操作类型名称 可直接显示
 */
tableOpBizTypeName?: string;
/**
 * 操作人名称
 */
opUserName?: string;
}
/**
 * 预定记录列表单项
 */
export interface BookRecordListItemWebDTO {

/**
 * 预定到达时间
 */
bookArrivedTime?: string;
/**
 * 0-已取消 1-已预定 2-已过期 3-已完成
 */
bookStatus?: '0'|'1'|'2'|'3';
/**
 * 预定用户预定时客户经理ID
 */
cusManagerId?: number;
/**
 * 预定人客户名称
 */
bookCustomerName?: string;
/**
 * 预定自然日
 */
bookDate?: string;
/**
 * 预定操作人名称
 */
bookOpName?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 预定操作人ID
 */
bookOpId?: number;
/**
 * 会员卡名称
 */
bookMemberVipCardName?: string;
/**
 * 预定用户预定时客户经理name
 */
cusManagerName?: string;
/**
 * 预定用户类型1-会员2-粉丝3-散客
 */
bookCustomerType?: '1'|'2'|'3';
/**
 * 台位名称冗余
 */
barTableName?: string;
/**
 * 预定记录id
 */
id?: number;
/**
 * 区域ID
 */
areaId?: number;
/**
 * 预定电话
 */
bookCustomerPhone?: string;
/**
 * 预定人账户ID
 */
bookMemberId?: number;
/**
 * 区域名称
 */
areaName?: string;
/**
 * 预定到店人数
 */
bookArrivedPerNum?: number;
/**
 * 预定编号，给用户看的可读的编号
 */
bookNo?: string;
/**
 * 预定业务日
 */
bookBizDate?: string;
/**
 * 预定台位ID
 */
barTableId?: number;
/**
 * 预定操作人类型,1-客户 2-客户经理 3-服务员 4-控台员
 */
bookOpType?: '1'|'2'|'3'|'4'|'5'|'6';
}
/**
 * 商品库存记录分页列表对象
 */
export interface GoodsStockRecordPageListDTO {

/**
 * 业务单号
 */
businessNo?: string;
/**
 * 原数量
 */
oldNum?: number;
/**
 * 业务ID
 */
businessId?: number;
/**
 * 业务类型
 */
businessType?: number;
/**
 * 数据ID
 */
id?: number;
/**
 * 操作数量
 */
num?: number;
/**
 * 操作时间
 */
operationTime?: string;
/**
 * 操作人
 */
operator?: string;
/**
 * 操作人ID
 */
operatorId?: number;
/**
 * 商品ID
 */
goodsId?: number;
/**
 * 新数量
 */
newNum?: number;
}
/**
 * 商品统计类型删除入参对象
 */
export interface GoodsStatisTypeRemoveCmd {

/**
 * 商品类型ID
 */
id?: number;
}
/**
 * 收单商户绑定到公司或门店请求
 */
export interface IncomeAccountBindComClubCmd {

/**
 * 收单账户名称(移动收单账户名称或设备收单账户名称)
 */
accountName?: string;
/**
 * 收单账户ID(移动收单账户ID或设备收单账户ID)
 */
accountId?: number;
/**
 * 绑定类型 1-移动收单户 2-设备收单户
 */
accBindType?: number;
/**
 * 门店ID，当绑定对象是门店时必传
 */
clubId?: number;
/**
 * 公司ID
 */
comId?: number;
/**
 * 主键
 */
id?: number;
}
/**
 * 商品分类分页列表对象
 */
export interface GoodsTypePageListDTO {

/**
 * 区域ID
 */
barAreaIds?: number[];
/**
 * 创建人
 */
createName?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 数据ID
 */
id?: number;
/**
 * 分类名
 */
name?: string;
/**
 * 排序号
 */
displayOrder?: number;
/**
 * 状态 true-正常，false-禁用
 */
status?: boolean;
/**
 * 类型
 */
type?: number;
}
/**
 * 编辑公司
 */
export interface EditCompanyCmd {

/**
 * 营业执照
 */
businessLicense: string;
/**
 * 法人名字
 */
legalPerson: string;
/**
 * 微信管理端小程序appId
 */
wxminiManageAppId?: string;
/**
 * 微信管理端小程序密钥
 */
wxminiManageSecret?: string;
/**
 * 联系电话
 */
contactPhone: string;
/**
 * 公司注册地址
 */
regAddress: string;
/**
 * 微信公众号密钥
 */
wxpubSecret?: string;
/**
 * 法人身份证正面
 */
legalPersonIdcardHead: string;
/**
 * 公司ID
 */
id: number;
/**
 * 应用logo
 */
logo: string;
/**
 * 法人身份证背面
 */
legalPersonIdcardBack: string;
/**
 * 社会统一信用代码
 */
usci: string;
/**
 * 微信小程序密钥
 */
wxminiSecret: string;
/**
 * 微信公众号appId
 */
wxpubAppId?: string;
/**
 * 公司注册名称
 */
regName: string;
/**
 * 联系人名字
 */
contactPerson: string;
/**
 * 微信小程序appId
 */
wxminiAppId: string;
/**
 * 联系邮箱
 */
contactEmail?: string;
}
/**
 * 二维码下载
 */
export interface BarTableQrCodeDownloadCmd {

/**
 * tableId
 */
tableId: number;
}
/**
 * No description
 */
export interface QueryOrderStatisticsRequest {

/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * 查询日期，格式YY-MM-DD，如：2016-09-20
 */
date?: string;
/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * 打印机编号
 */
sn?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
}
/**
 * 会员升级
 */
export interface UpgradeVipCmd {

/**
 * 要升级的粉丝ID
 */
memberId: number;
/**
 * 购买月份
 */
buyDuration: number;
/**
 * 会员卡ID
 */
cardId: number;
}
/**
 * 用户预开台扫码结果
 */
export interface CheckinScanQrCodeResultDTO {

/**
 * 预约记录详情,有预约的时候返回预约记录详情，否则返回null
 */
bookRecordDetail?: any;
/**
 * 当前用户已开台数量，如果不是注册用户，因为非注册用户开台不留信息，则该值不一定准确
 */
checkinNum?: number;
/**
 * 扫码所得用户信息,如果查不出用户则是null，有用户的情况下里面customerType用于区分会员，粉丝还是散客
 */
customerInfo?: any;
/**
 * 当前选中准备操作开台的台位，查询有传tableId参数则返回，查不到table返回null
 */
selectTable?: any;
}
/**
 * 公司下拉数据框返回数据
 */
export interface CompanyComboBoxDTO {

/**
 * 公司ID
 */
id?: number;
/**
 * 公司(应用)名称
 */
name?: string;
/**
 * 是否启用 1-正常 2-停用
 */
enableStatus?: boolean;
}
/**
 * 批量设置出品位置
 */
export interface ProducePositionBatchEditCmd {

/**
 * 商品ID
 */
ids?: number[];
/**
 * 出品位置ID
 */
producePositionId?: number;
}
/**
 * 二维码批量下载
 */
export interface BarTableQrCodeDownloadBatchCmd {

/**
 * areaId
 */
areaId?: number;
}
/**
 * 套餐包含的单品信息
 */
export interface GoodsPackDetailItemDTO {

/**
 * 商品图
 */
goodsImage: string;
/**
 * 商品数量
 */
goodsNum: number;
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
/**
 * 商品ID
 */
goodsId: number;
/**
 * 排序号
 */
displayOrder: number;
/**
 * 原价
 */
originalPrice?: number;
/**
 * 商品名
 */
goodsName: string;
}
/**
 * 商品分类详情对象
 */
export interface GoodsTypeDetailDTO {

/**
 * 活动菜单的渠道ID
 */
channelSourceId?: number;
/**
 * 服务员菜单绑定的服务员ID列表
 */
waiterIds?: number[];
/**
 * 创建时间
 */
createTime?: string;
/**
 * 区域ID
 */
barAreaIds?: number[];
/**
 * 排序号
 */
displayOrder?: number;
/**
 * 显示类型 1-全部可见， 2-部分可见
 */
displayType?: number;
/**
 * 数据ID
 */
id?: number;
/**
 * 状态 true-正常，false-禁用
 */
status?: boolean;
/**
 * 类型
 */
type?: number;
/**
 * 创建人
 */
createName?: string;
/**
 * 分类名
 */
name?: string;
}
/**
 * 余额预付返回对象
 */
export interface WalletCardPayOrderDTO {

/**
 * 余额支付id
 */
walletCardPayId: number;
}
/**
 * 新增门店
 */
export interface AddClubCmd {

/**
 * 公司ID
 */
comId: number;
/**
 * 店铺负责人
 */
personInCharge?: string;
/**
 * 店铺负责人身份证背面
 */
personInChargeIdcardBack?: string;
/**
 * 店铺经度
 */
lnt: string;
/**
 * 店名称
 */
name: string;
/**
 * 店铺负责人身份证正面
 */
personInChargeIdcardHead?: string;
/**
 * 客服电话
 */
servicePhone: string;
/**
 * 统一社会信用代码
 */
usci?: string;
/**
 * 店铺营业地址
 */
address: string;
/**
 * 店铺负责人电话
 */
personInChargePhone?: string;
/**
 * 显示顺序,越小越靠前，默认生成100
 */
displayOrder?: number;
/**
 * 店铺营业执照
 */
clubBusinessLicense?: string;
/**
 * 店铺纬度
 */
lat: string;
/**
 * 工商注册名称
 */
clubRegistName?: string;
}
/**
 * No description
 */
export interface PrinterPosition {

createTime?: string;
id?: number;
clubId?: number;
updateName?: string;
updateTime?: string;
printType?: number;
printerId?: string;
updateId?: number;
comId?: number;
createName?: string;
producePosition?: string;
createId?: number;
}
/**
 * No description
 */
export interface ChannelSourceRemoveCmd {

/**
 * 数据ID
 */
id: number;
}
/**
 * No description
 */
export interface QueryOrderStatusRequest {

/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 订单编号
 */
orderId?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
}
/**
 * No description
 */
export interface ComInAccountStatisticDTO {

/**
 * 本金金额
 */
amount?: number;
/**
 * 充值卡赠送金
 */
walletCardGiftAmount?: number;
/**
 * 储值卡本金
 */
storedCardAmount?: number;
/**
 * 储值卡赠送金
 */
storedCardGiftAmount?: number;
/**
 * 充值卡本金
 */
walletCardAmount?: number;
/**
 * 赠送金金额
 */
giftAmount?: number;
}
/**
 * 区域更新
 */
export interface BarAreaUpdateCmd {

/**
 * 名称
 */
name: string;
/**
 * 是否顾客可见
 */
publicOpen?: boolean;
/**
 * 更新ID
 */
id: number;
/**
 * 显示顺序，不传则默认100，越小越前
 */
displayOrder?: number;
}
/**
 * 商品分类状态变更对象
 */
export interface GoodsTypeStatusCmd {

/**
 * 状态 true-启用， false-禁用
 */
status: boolean;
/**
 * 商品分类ID
 */
id: number;
}
/**
 * 系统菜单Tree属性
 */
export interface SysMenuTreeAttrCell {

/**
 * 备注说明
 */
remark?: string;
/**
 * 类型   1：一级目录topmenu   2：菜单submenu   3：按钮button
 */
menuType?: number;
/**
 * 排序
 */
orderNum?: number;
/**
 * 菜单相对路径path
 */
path?: string;
/**
 * 菜单名称
 */
title?: string;
/**
 * 授权字符串,主要是给后端用(一个字符串,冒号分隔,user::(目录),user:guanli:(菜单),user:guanli:add(按钮)
 */
perms?: string;
/**
 * 菜单图标
 */
icon?: string;
/**
 * 是否外链,0否，1是
 */
outlink?: boolean;
/**
 * 外链域名url,http://www.baidu.com，和上面的url做拼接访问
 */
outlinkUrl?: string;
/**
 * 类型   1：系统功能   2：业务功能
 */
funType?: number;
/**
 * 菜单key,区别perms主要是给前端渲染页面用的，目录和菜单直接就是一个英文字符串yonghu,按钮为_add
 */
menuKey?: string;
}
/**
 * 进件商户账户新增请求对象
 */
export interface IncomeMchAccountsDTO {

/**
 * 收单商户账户ID
 */
id?: number;
/**
 * 收单商户账户名称
 */
acquiringAccountName?: string;
}
/**
 * No description
 */
export interface BarTableInfoListDTO {

/**
 * 是否虚拟台位  true-是，false-否
 */
virtualTable?: boolean;
/**
 * 区域ID
 */
areaId?: number;
/**
 * ID
 */
id?: number;
/**
 * 台位名称
 */
name?: string;
}
/**
 * 移动端 或前后端分离 分页查询实体
 */
export interface PageInfoReq {

/**
 * 非必填 翻页前最后一条ID，填了后端如果支持这个字段,则可以优化查询速度
 */
lastId?: number;
/**
 * 非必填 排序字段，填了后端如果支持这个字段,则会按这个排序 e.g. id,name,有多个则逗号分隔
 */
order?: string;
/**
 * 非必填 例子asc或desc 代表升序或者降序，默认降序
 */
sort?: string;
/**
 * 每页条数 10
 */
pageSize?: number;
/**
 * 第几页 1
 */
pageNum?: number;
}
/**
 * 吧台启用停用
 */
export interface BarTableEnableCmd {

/**
 * 启用停用
 */
enableStatus: boolean;
/**
 * ID
 */
id: number;
}
/**
 * 角色编辑请求对象
 */
export interface SysRoleEditCmd {

/**
 * 备注
 */
remark?: string;
/**
 * 角色名称
 */
roleName?: string;
/**
 * 角色标识，一个英文字符串，比如admin，主要用于后端认证权限时使用
 */
roleSign?: string;
/**
 * 角色类型 1-固定角色 2-自定义角色,固定角色只有超管可以编辑
 */
roleType?: number;
/**
 * 权限ID
 */
menuIds?: number[];
/**
 * ID
 */
id?: number;
}
/**
 * 时间范围
 */
export interface TimeRangeDTO {

/**
 * 时间范围end
 */
endTime?: string;
/**
 * 时间范围start
 */
startTime?: string;
}
/**
 * 更新门店资料
 */
export interface EditClubCmd {

/**
 * 显示顺序,越小越靠前，默认生成100
 */
displayOrder?: number;
/**
 * 工商注册名称
 */
clubRegistName?: string;
/**
 * 店铺营业地址
 */
address: string;
/**
 * 公司ID
 */
comId: number;
/**
 * 对外客服电话
 */
servicePhone: string;
/**
 * 店铺负责人
 */
personInCharge?: string;
/**
 * 店铺经度
 */
lnt: string;
/**
 * 统一社会信用代码
 */
usci?: string;
/**
 * 店ID
 */
id: number;
/**
 * 店铺负责人身份证背面
 */
personInChargeIdcardBack?: string;
/**
 * 店铺纬度
 */
lat: string;
/**
 * 店铺负责人电话
 */
personInChargePhone?: string;
/**
 * 店铺营业执照
 */
clubBusinessLicense?: string;
/**
 * 店名称
 */
name: string;
/**
 * 店铺负责人身份证正面
 */
personInChargeIdcardHead?: string;
}
/**
 * 进件商户账户POS机编辑请求对象
 */
export interface IncomeMchAccountPosEditCmd {

/**
 * 门店ID，当绑定对象是门店时必传
 */
clubId?: number;
/**
 * 公司ID
 */
comId?: number;
/**
 * 终端号
 */
terminalNo?: string;
/**
 * 设备ID
 */
id?: number;
/**
 * 设备名称
 */
equipmentName?: string;
/**
 * 设备编号
 */
equipmentNo?: string;
}
/**
 * 开台套简单商品信息
 */
export interface CheckinGoodsInfoDTO {

/**
 * 显示价格 20.01
 */
price?: string;
/**
 * ID
 */
id?: number;
/**
 * 展示排序
 */
displayOrder?: number;
/**
 * 名称
 */
name?: string;
}
/**
 * 公司基本信息
 */
export interface CompanyInfoDTO {

/**
 * 公司名称,品牌名
 */
name?: string;
/**
 * 开启状态,布尔型 0-已停用 1-已启用
 */
enableStatus?: boolean;
/**
 * 公司ID
 */
id?: number;
}
/**
 * 商品统计分类新增对象
 */
export interface GoodsStatisTypeAddCmd {

/**
 * 分类名
 */
name?: string;
/**
 * 排序号 -不可重复
 */
displayOrder?: number;
}
/**
 * 打印标签请求对象
 */
export interface PrintTagCmd {

/**
 * 打印机编号
 */
sn?: string;
/**
 * 联系电话
 */
mobile?: string;
/**
 * 打印份数，默认为1
 */
copies?: number;
/**
 * 订单号
 */
orderNo?: string;
/**
 * 支付方式41~55：支付宝 微信 ...
 */
payType?: number;
/**
 * 下单时间
 */
orderTime?: string;
/**
 * 下单台位名称
 */
barTableName?: string;
/**
 * 打印模式，默认为0
 */
mode?: number;
/**
 * 声音播放模式，0 为取消订单模式，1 为静音模式，2 为来单播放模式，默认为 2 来单播放模式
 */
voice?: number;
/**
 * 客户姓名
 */
customerName?: string;
/**
 * 标签明细
 */
printTagItemCmds?: PrintTagItemCmd[];
/**
 * 支付与否59~61：退款 到账 消费
 */
payMode?: number;
/**
 * 支付金额
 */
money?: number;
}
/**
 * 支付单返回对象
 */
export interface TradePayDTO {

/**
 * 总交易金额
 */
totalTradeAmount?: number;
/**
 * 开台id
 */
barTableCheckinId?: number;
/**
 * 所属区域名称
 */
barAreaName?: string;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 支付单关联订单列表
 */
orderList?: TradePayOrderDTO[];
/**
 * 台位名称
 */
barTableName?: string;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * 支付单id
 */
id?: number;
/**
 * 支付单明细列表
 */
detailList?: TradePayDetailDTO[];
/**
 * 支付状态(支付中,支付中,支付成功,支付失败,退款中,退款成功,已取消)
 */
tradePayStatus?: 'CLOSED'|'PAY_FAIL'|'PAY_ING'|'PAY_INIT'|'PAY_SUCCESS'|'REFUND_ING'|'REFUND_SUCCESS';
/**
 * 总支付金额，单位分
 */
totalPayAmount?: number;
/**
 * 所属区域id
 */
barAreaId?: number;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 商品简介 酒水商品购买，会员卡购买，会员卡续费
 */
subject?: string;
/**
 * 下单粉丝名称
 */
memberName?: string;
/**
 * 下单粉丝id
 */
memberId?: number;
/**
 * 台位id
 */
barTableId?: number;
}
/**
 * 会员等级卡新增对象
 */
export interface VipLevelCardAddCmd {

/**
 * 会员卡名
 */
name: string;
/**
 * 激活规则
 */
activeRule?: string;
/**
 * 展示折扣开始时间 1-展示， 0-隐藏
 */
showDiscountStartDate: boolean;
/**
 * 销售状态 1-可售，0-不可售
 */
saleStatus: boolean;
/**
 * 价格体系列表
 */
priceAddCmdList: VipLevelCardPriceAddCmd[];
/**
 * 权益
 */
equityDesc: string;
/**
 * 展示折扣结束时间 1-展示， 0-隐藏
 */
showDiscountEndDate: boolean;
/**
 * 效果图
 */
coverUrl: string;
/**
 * 显示状态 1-展示，0-隐藏
 */
showStatus: boolean;
/**
 * 折扣结束时间
 */
discountEndDate: string;
/**
 * 折扣开始时间
 */
discountStartDate: string;
/**
 * 是否允许后台升级 1-是，0-否
 */
allowBackendUpgrade: boolean;
/**
 * 等级
 */
level: number;
/**
 * 是否自动激活 1-是，0-否
 */
autoActive: boolean;
}
/**
 * No description
 */
export interface GoodsProduceStatisNumDTO {

/**
 * 三方数量
 */
thirdQuantity?: number;
/**
 * 商品统计分类名
 */
goodsStatisTypeName?: string;
/**
 * 商品名
 */
goodsName?: string;
/**
 * 赠送数量
 */
giftQuantity?: number;
/**
 * 商品ID
 */
goodsId?: number;
/**
 * 总出品数量
 */
totalQuantity?: number;
/**
 * 销售数量
 */
salesQuantity?: number;
/**
 * 商品统计分类ID
 */
goodsStatisTypeId?: number;
}
/**
 * club列表item
 */
export interface ClubListItemDTO {

/**
 * 店铺名称
 */
name?: string;
/**
 * 店铺营业地址
 */
address?: string;
/**
 * 设备收单账户名称
 */
equipmentAccountName?: string;
/**
 * 移动收单账户名称
 */
acquiringAccountName?: string;
/**
 * 移动收单账户绑定ID
 */
acquiringAccountBindId?: number;
/**
 * 更新人名称
 */
updateName?: string;
/**
 * 店铺状态 club状态 0-待开放,1-营业中,2-已关闭
 */
clubStatus?: '0'|'1'|'2';
/**
 * 店铺ID
 */
id?: number;
/**
 * 店铺经度
 */
lnt?: string;
/**
 * 店铺状态中文翻译
 */
clubStatusDesc?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 显示顺序,越小越靠前
 */
displayOrder?: number;
/**
 * 设备收单账户ID
 */
equipmentAccountId?: number;
/**
 * 创建人ID
 */
createId?: number;
/**
 * 工商注册名称
 */
clubRegistName?: string;
/**
 * 店铺纬度
 */
lat?: string;
/**
 * 设备收单账户绑定ID
 */
equipmentAccountBindId?: number;
/**
 * 对外客服电话
 */
servicePhone?: string;
/**
 * 创建人名称
 */
createName?: string;
/**
 * 所属公司ID
 */
comId?: number;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 更新人时间
 */
updateTime?: string;
/**
 * 社会信用代码
 */
usci?: string;
/**
 * 移动收单账户ID
 */
acquiringAccountId?: number;
}
/**
 * 新增单品对象
 */
export interface PackGoodsEditCmd {

/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 优惠状态
 */
discountStatus: boolean;
/**
 * 商品ID
 */
id?: number;
/**
 * 商品图片
 */
image: string;
/**
 * 套餐包含的商品列表
 */
goodsList: PackGoodsNumAddCmd[];
/**
 * 销售开始时间
 */
saleStartTime?: string;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 商品名
 */
name: string;
/**
 * 排序号 每个分类下唯一
 */
displayOrder: number;
/**
 * 会员卡优惠信息
 */
vipLevelCardDiscount?: GoodsVipLevelCardDiscountDTO[];
/**
 * 销售业绩金额 默认为商品原价
 */
salesPerformancePrice?: number;
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
/**
 * 原价 单位-分
 */
originalPrice: number;
/**
 * 商品类型ID列表
 */
goodsTypeIds: number[];
/**
 * 销售结束时间
 */
saleEndTime?: string;
}
/**
 * No description
 */
export interface PrinterSnRequest {

/**
 * debug=1返回非json格式的数据。仅测试时候使用
 */
debug?: string;
/**
 * 当前UNIX时间戳，10位，精确到秒
 */
timestamp?: string;
/**
 * 芯烨云后台注册用户名
 */
user?: string;
/**
 * 芯烨云后台注册秘钥
 */
userKey?: string;
/**
 * 签名：对参数 user + UKEY + timestamp 拼接后（+号表示连接符）进行SHA1加密得到签名，值为40位小写字符串
 */
sign?: string;
/**
 * 打印机编号请求项集合
 */
snlist?: string[];
}
/**
 * No description
 */
export interface ClubWaitAccountStatisticDTO {

/**
 * 赠送金金额
 */
giftAmount?: number;
/**
 * 储值卡本金
 */
storedCardAmount?: number;
/**
 * 本金金额
 */
amount?: number;
/**
 * 储值卡赠送金
 */
storedCardGiftAmount?: number;
/**
 * 充值卡本金
 */
walletCardAmount?: number;
/**
 * 充值卡赠送金
 */
walletCardGiftAmount?: number;
}
/**
 * 服务提成统计查询条件
 */
export interface ServiceCommissionDataQuery {

/**
 * 查询开始时间
 */
startTime?: string;
/**
 * 非必填 翻页前最后一条ID，填了后端如果支持这个字段,则可以优化查询速度
 */
lastId?: number;
/**
 * 是否服务员分组
 */
groupWaiter?: boolean;
/**
 * 非必填 例子asc或desc 代表升序或者降序，默认降序
 */
sort?: string;
/**
 * 查询结束时间
 */
queryEndTime?: string;
/**
 * 非必填 排序字段，填了后端如果支持这个字段,则会按这个排序 e.g. id,name,有多个则逗号分隔
 */
order?: string;
/**
 * 查询结束时间
 */
endTime?: string;
/**
 * 查询开始时间
 */
queryStartTime?: string;
/**
 * 第几页 1
 */
pageNum?: number;
/**
 * 每页条数 10
 */
pageSize?: number;
/**
 * 服务员ID
 */
waiterId?: number;
}
/**
 * 商品库存状态变更
 */
export interface ChangeGoodsStockStatusCmd {

/**
 * 计佣状态
 */
stockStatus?: boolean;
/**
 * 商品ID
 */
id?: number;
}
/**
 * 预约规则更新
 */
export interface BookRuleUpdateCmd {

/**
 * 规则ID
 */
id: number;
/**
 * 可预约开始时间 19:00:00
 */
bookTimeStart: string;
/**
 * 是否全局允许预约
 */
canBook: boolean;
/**
 * vip可预约开始时间 19:00
 */
vipBookTimeStart: string;
/**
 * 营业截至时间,03:00:00
 */
workTimeEnd: string;
/**
 * 可提前预约天数，最小0,0=当天
 */
bookEarlyDayNum: number;
/**
 * 需提前预约分钟数，最小0
 */
bookEarlyMin: number;
/**
 * 营业开始时间,20:00:00
 */
workTimeStart: string;
/**
 * vip可预约结束时间 22:00
 */
vipBookTimeEnd: string;
/**
 * 可预约结束时间 20:00:00
 */
bookTimeEnd: string;
/**
 * 关闭预约的情况下，可以展示给用户看的提示信息
 */
noBookAlert: string;
}
/**
 * 储值卡开卡确认对象
 */
export interface CardChangePwdConfirmCmd {

/**
 * 旧密码(需要md5)
 */
oldPassword?: string;
/**
 * 卡id
 */
cardId?: number;
/**
 * 新密码(需要md5)
 */
newPassword?: string;
}
/**
 * 编辑会员信息
 */
export interface MemberEditCmd {

/**
 * 粉丝ID
 */
memberId: number;
/**
 * 粉丝习惯
 */
habit?: string;
}
/**
 * 台位存酒记录
 */
export interface BarTableAccessWineListItemDTO {

/**
 * 商品名称
 */
wineName?: string;
/**
 * 操作时间
 */
applyTime?: string;
/**
 * 存取酒记录ID
 */
recordId?: number;
/**
 * 数量
 */
num?: number;
/**
 * 操作人
 */
applyUserName?: string;
/**
 * 类型
 */
accessType?: string;
}
/**
 * No description
 */
export interface DataScreenTodayBusinessCardDataDTO {

/**
 * 今日充值卡消费金额
 */
prepaidCardAmount?: number;
/**
 * 今日储值卡消费金额
 */
physicalCardAmount?: number;
}
/**
 * No description
 */
export interface CusAccountBalancePageListDTO {

/**
 * 粉丝手机号
 */
memberMobile?: string;
/**
 * 余额卡名
 */
walletCardName?: string;
/**
 * 赠送余额
 */
giftBalance?: number;
/**
 * 粉丝名
 */
memberName?: string;
/**
 * 余额
 */
balance?: number;
/**
 * 门店名
 */
clubNames?: string;
}
/**
 * No description
 */
export interface GoodsStatisTypeListDTO {

/**
 * 分类名
 */
name?: string;
/**
 * 分类ID
 */
id?: number;
/**
 * 状态
 */
status?: boolean;
}
/**
 * 台位类型列表item
 */
export interface BarTableTypeListItemDTO {

/**
 * 创建人ID
 */
createId?: number;
/**
 * 更新时间
 */
updateTime?: string;
/**
 * 创建时间
 */
createTime?: string;
/**
 * 更新人ID
 */
updateId?: number;
/**
 * 名称
 */
name?: string;
/**
 * 更新人
 */
updateName?: string;
/**
 * 创建人
 */
createName?: string;
/**
 * 是否启用
 */
enableStatus?: boolean;
/**
 * ID
 */
id?: number;
/**
 * 显示顺序
 */
displayOrder?: number;
}
/**
 * 台位列表简单信息
 */
export interface BarTableInfoDTO {

/**
 * 台位名称
 */
name?: string;
/**
 * 所属区域名称
 */
areaName?: string;
/**
 * 显示顺序，越小越在前，默认100
 */
displayOrder?: number;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * 启用状态
 */
enableStatus?: boolean;
/**
 * 二维码
 */
qrCode?: string;
/**
 * 开台套名称
 */
checkinPackGoodsName?: string;
/**
 * c端用户可见
 */
publicOpen?: boolean;
/**
 * 支持人数
 */
supportNum?: number;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 低消套餐ID
 */
checkinPackGoodsId?: number;
/**
 * ID
 */
id?: number;
/**
 * 所属区域ID
 */
areaId?: number;
}
/**
 * 进件商户账户新增请求对象
 */
export interface IncomeMchAccountAddCmd {

/**
 * 收单账户名称
 */
acquiringAccountName?: string;
/**
 * 银行卡信息
 */
bankInfo?: string;
/**
 * 收单账户子商户号
 */
subMchId?: string;
/**
 * 公司ID
 */
comId?: number;
/**
 * 银行账户类型 B:对公,C:对私
 */
bankAccountType?: string;
/**
 * 门店ID，当绑定对象是门店时必传
 */
clubId?: number;
/**
 * 收单机构名称：盛付通
 */
acquiringOrgName?: string;
/**
 * 商户类型 企业：ENTERPRISE 个体工商户：INDIVIDUAL 小微商户：PERSONAL
 */
subjectType?: string;
/**
 * 收单机构类型，SHENG_PAY
 */
acquiringOrg?: string;
}
/**
 * No description
 */
export interface StoredValueCardEditCMD {

/**
 * 管理员电话
 */
managerPhone?: string;
/**
 * 充值验证方式(0无需验证,1短信验证)
 */
rechargeVerifyType?: number;
/**
 * 管理员名称
 */
managerName?: string;
/**
 * id
 */
id: number;
/**
 * 开卡验证方式(0无需验证,1短信验证)
 */
activeVerifyType?: number;
}
/**
 * 酒吧台位当前基本信息-客户端用
 */
export interface BarTableStatusStatisDTO {

/**
 * 开台超时总数
 */
checkinExpiredNum?: number;
/**
 * 正常开台总数
 */
checkinNum?: number;
/**
 * 预留总数
 */
holdNum?: number;
/**
 * 预定总数
 */
bookNum?: number;
/**
 * 台位总数
 */
totalNum?: number;
/**
 * 当前统计信息所属工作日 yyyy-MM-dd
 */
workDate?: string;
/**
 * 空台总数
 */
emptyNum?: number;
}
/**
 * 会员等级卡新增对象
 */
export interface VipLevelCardEditCmd {

/**
 * 折扣结束时间
 */
discountEndDate: string;
/**
 * 权益
 */
equityDesc: string;
/**
 * 会员卡ID
 */
id: number;
/**
 * 折扣开始时间
 */
discountStartDate: string;
/**
 * 是否自动激活 1-是，0-否
 */
autoActive: boolean;
/**
 * 等级
 */
level: number;
/**
 * 展示折扣开始时间 1-展示， 0-隐藏
 */
showDiscountStartDate: boolean;
/**
 * 激活规则
 */
activeRule?: string;
/**
 * 效果图
 */
coverUrl: string;
/**
 * 显示状态 1-展示，0-隐藏
 */
showStatus: boolean;
/**
 * 展示折扣结束时间 1-展示， 0-隐藏
 */
showDiscountEndDate: boolean;
/**
 * 会员卡名
 */
name: string;
/**
 * 价格体系列表
 */
priceAddCmdList: VipLevelCardPriceAddCmd[];
/**
 * 是否允许后台升级 1-是，0-否
 */
allowBackendUpgrade: boolean;
/**
 * 销售状态 1-可售，0-不可售
 */
saleStatus: boolean;
}
/**
 * No description
 */
export interface SysUserListDTO {

/**
 * 用户主键
 */
id: number;
/**
 * 用户名
 */
realName: string;
}
/**
 * 吧台类型删除
 */
export interface BarTableTypeRemoveCmd {

/**
 * 更新ID
 */
id: number;
}
/**
 * 台位营业日状态详情
 */
export interface BarTableBizDateDetailAdminDTO {

/**
 * 最后一次清台时间
 */
lastCheckoutTime?: string;
/**
 * 开台用户ID，如果未注册过app则没有id
 */
checkinMemberId?: number;
/**
 * 客户经理电话
 */
customerManagerPhone?: string;
/**
 * 客户经理ID
 */
customerManagerId?: number;
/**
 * 当前信息所属工作日 yyyy-MM-dd
 */
bizDate?: string;
/**
 * 预留记录ID
 */
holdRecordId?: number;
/**
 * 预留营业日期
 */
holdBizDate?: string;
/**
 * 当前开台状态 0-未开 1-已开
 */
checkin?: boolean;
/**
 * 预留客户名称(脱敏)
 */
holdCustomerName?: string;
/**
 * 所属台位类型ID
 */
tableTypeId?: number;
/**
 * 是否空台
 */
empty?: boolean;
/**
 * 预留客户如果是注册用户，则返回注册用户ID
 */
holdMemberId?: number;
/**
 * 预定创建时间
 */
bookCreateTime?: string;
/**
 * 当前台位累计消费金额(分)，开台中的时候有值
 */
consumeAmount?: number;
/**
 * 开台套是否需要购买 0=无需购买 1=需要购买
 */
checkinPackGoodsNeedBuy?: boolean;
/**
 * 开台时间为True的情况下，返回开台到现在的持续分钟数
 */
checkinDuration?: number;
/**
 * 开台用户电话(脱敏)
 */
checkinCustomerPhone?: string;
/**
 * 当前是否已被预定，预定开台后会被设置未false
 */
book?: boolean;
/**
 * 所属区域ID
 */
areaId?: number;
/**
 * 开台备注信息
 */
checkinRemark?: string;
/**
 * 台位名称，A-11,A-12
 */
name?: string;
/**
 * 台位二维码
 */
qrCode?: string;
/**
 * 用户vip激活状态
 */
memberVipActiveStatus?: boolean;
/**
 * 预定人名称(信息脱敏)
 */
bookCustomerName?: string;
/**
 * 预留客户电话(脱敏)
 */
holdCustomerPhone?: string;
/**
 * 预定到达时间
 */
bookArrivedTime?: string;
/**
 * 预留备注
 */
holdRemark?: string;
/**
 * 转台记录ID
 */
transRecoredId?: number;
/**
 * 服务员ID
 */
waiterId?: number;
/**
 * 用户Id,当预定和开台是系统用户的时候，提供member当前信息
 */
memberId?: number;
/**
 * 台位在该营业日的状态 0-空台 1-已预定 2已开台 3已预留 10异常
 */
bizDateTableStatus?: '0'|'1'|'2'|'3';
/**
 * 开台到店人数
 */
checkinPerNum?: number;
/**
 * 开台套价格 20.02
 */
checkinPackGoodsPrice?: string;
/**
 * 所属台位类型名称
 */
tableTypeName?: string;
/**
 * 服务员电话
 */
waiterPhone?: string;
/**
 * 转台进入时间
 */
transTime?: string;
/**
 * 预定操作人类型 1-客户 2-客户经理 3-服务员 4-前台
 */
bookOpType?: '1'|'2'|'3'|'4'|'5'|'6';
/**
 * 开台用户类型 1-会员 2-粉丝 3-散客
 */
checkinCustomerType?: '1'|'2'|'3';
/**
 * 低消套餐ID
 */
checkinPackGoodsId?: number;
/**
 * vip到期时间
 */
memberVipExpire?: string;
/**
 * 用户当前 vip等级
 */
memberVipLevelName?: string;
/**
 * 当前开台记录ID
 */
checkinRecordId?: number;
/**
 * 用户名称,当预定和开台是系统用户的时候，提供member当前信息(脱敏)
 */
memberName?: string;
/**
 * 是否虚拟台
 */
virtualTable?: boolean;
/**
 * 预定记录ID
 */
bookRecordId?: number;
/**
 * 服务员名称
 */
waiterName?: string;
/**
 * 客户经理名称
 */
customerManagerName?: string;
/**
 * 转台记录表述，e.g.A17转
 */
transTag?: string;
/**
 * 预定人客户类型1-会员2-粉丝3-散客
 */
bookCustomerType?: '1'|'2'|'3';
/**
 * 支持人数
 */
supportNum?: number;
/**
 * 开台套名称
 */
checkinPackGoodsName?: string;
/**
 * 预定到店人数
 */
bookPerNum?: number;
/**
 * 用户名称(脱敏)
 */
checkinCustomerName?: string;
/**
 * 是否开台超时，当前一个工作日开台的台位到第二个工作日的时候还未清台，则会返回true
 */
checkinExpired?: boolean;
/**
 * 所属区域名称
 */
areaName?: string;
/**
 * 预定人电话(脱敏)
 */
bookCustomerPhone?: string;
/**
 * 预定自然日期
 */
bookDate?: string;
/**
 * 开台时间 yyyy-mm-dd HH:mm:ss
 */
checkinTime?: string;
/**
 * 显示顺序，越小越在前,已排好序
 */
displayOrder?: number;
/**
 * 当前是否已被预留
 */
hold?: boolean;
/**
 * 当前是否vip
 */
memberVip?: boolean;
/**
 * 预定备注信息
 */
bookRemark?: string;
/**
 * 台位ID
 */
id?: number;
/**
 * 会员优惠模式 1按开台人优惠 2按下单人优惠
 */
vipDiscountMode?: '1'|'2';
}
/**
 * No description
 */
export interface ChannelSourceAddCmd {

/**
 * 渠道名
 */
name: string;
}
/**
 * 吧台删除
 */
export interface BarTableRemoveCmd {

/**
 * ID
 */
id: number;
}
/**
 * 粉丝会员信息列表对象
 */
export interface VipPageDTO {

/**
 * 激活状态 true-已激活，false-未激活
 */
activeStatus?: boolean;
/**
 * 用户生日
 */
birthday?: string;
/**
 * 会员卡ID
 */
cardId?: number;
/**
 * 头像
 */
avatarUrl?: string;
/**
 * vip状态 true-正常，false-已失效
 */
vipStatus?: boolean;
/**
 * 昵称
 */
nickName?: string;
/**
 * 注册日期
 */
createTime?: string;
/**
 * 手机号
 */
mobile?: string;
/**
 * 会员卡到期日期
 */
cardExpire?: string;
/**
 * 性别 1-男，2-女，3-其他
 */
gender?: number;
/**
 * 钱包剩余余额
 */
balance?: number;
/**
 * 消费积分
 */
consumePoint?: number;
/**
 * 会员卡名
 */
cardName?: string;
/**
 * 最近消费日期
 */
lastConsumeTime?: string;
/**
 * 会员编号
 */
id?: number;
/**
 * 粉丝ID
 */
memberId?: number;
}
/**
 * 角色保存请求对象
 */
export interface SysRoleSaveCmd {

/**
 * 权限ID
 */
menuIds?: number[];
/**
 * 角色标识 1-系统角色 2-公司角色
 */
roleType?: number;
/**
 * 角色名称
 */
roleName?: string;
/**
 * 备注
 */
remark?: string;
}
/**
 * 会员等级卡详情对象
 */
export interface VipLevelCardDTO {

/**
 * 备注信息
 */
remark?: string;
/**
 * 售卖状态 1-可售，0-不可售
 */
saleStatus?: boolean;
/**
 * 折扣结束日期（默认当天23.59.59秒结束）
 */
discountEndDate?: string;
/**
 * 会员卡ID
 */
id?: number;
/**
 * 展示折扣开始时间
 */
showDiscountStartDate?: boolean;
/**
 * 会员登记卡名
 */
name?: string;
/**
 * 折扣开始日期（默认当天0点开始）
 */
discountStartDate?: string;
/**
 * 激活规则
 */
activeRule?: string;
/**
 * 是否自动激活 1-是，0-否
 */
autoActive?: boolean;
/**
 * 是否允许后台升级 1-是，0-否
 */
allowBackendUpgrade?: boolean;
/**
 * 会员卡效果图
 */
coverUrl?: string;
/**
 * 展示折扣结束时间
 */
showDiscountEndDate?: boolean;
/**
 * 价格体系列表
 */
cardPriceInfoDTOList?: VipLevelCardPriceInfoDTO[];
/**
 * 会员卡等级
 */
level?: number;
/**
 * 会员卡权益
 */
equityDesc?: string;
/**
 * 展示状态 1-展示，0-隐藏
 */
showStatus?: boolean;
}
/**
 * 新增单品对象
 */
export interface SingleGoodsAddCmd {

/**
 * 存酒是否拍照
 */
depositImage: boolean;
/**
 * 存酒类型
 */
depositRuleType: number;
/**
 * 计佣状态
 */
computeCommissionStatus?: boolean;
/**
 * 商品统计类型名称
 */
goodsStatisTypeName: string;
/**
 * 出品位置
 */
producePositionId: number;
/**
 * 储值卡支付支持状态 1-支持，0-不支持 默认不支持
 */
storedValuePaySupport: boolean;
/**
 * 销售开始时间
 */
saleStartTime?: string;
/**
 * 服务员提成金额
 */
waiterCommissionPrice: number;
/**
 * 原价 单位-分
 */
originalPrice: number;
/**
 * 余额卡支付支持状态 1-支持，0-不支持 默认不支持
 */
walletPaySupport: boolean;
/**
 * 商品图片
 */
image: string;
/**
 * 商品统计类型ID
 */
goodsStatisTypeId: number;
/**
 * 排序号 每个分类下唯一
 */
displayOrder: number;
/**
 * 会员卡优惠信息
 */
vipLevelCardDiscount?: GoodsVipLevelCardDiscountDTO[];
/**
 * 商品名
 */
name: string;
/**
 * 存酒规则
 */
depositRuleId: number;
/**
 * 优惠状态
 */
discountStatus: boolean;
/**
 * 商品类型ID列表
 */
goodsTypeIds: number[];
/**
 * 销售业绩金额 默认为商品原价
 */
salesPerformancePrice?: number;
/**
 * 销售结束时间
 */
saleEndTime?: string;
}
/**
 * 商品统计分类编辑对象
 */
export interface GoodsStatisTypeEditCmd {

/**
 * 排序号 -不可重复
 */
displayOrder: number;
/**
 * 商品统计分类ID
 */
id: number;
/**
 * 分类名
 */
name: string;
}
/**
 * 储值卡开卡确认对象
 */
export interface CardActiveConfirmCmd {

/**
 * 卡内码
 */
serialNumber?: string;
/**
 * 卡id
 */
cardId?: number;
/**
 * 储值金额
 */
rechargeAmount?: number;
}
/**
 * No description
 */
export interface UserManageClubCombobox {

id?: number;
}
/**
 * 粉丝分页列表信息
 */
export interface MemberPageDTO {

/**
 * 昵称
 */
nickName?: string;
/**
 * 注册日期
 */
createTime?: string;
/**
 * 性别 1-男，2-女，3-其他
 */
gender?: number;
/**
 * 粉丝ID
 */
id?: number;
/**
 * 内测用户
 */
betaTester?: boolean;
/**
 * 手机号
 */
mobile?: string;
/**
 * 用户生日
 */
birthday?: string;
/**
 * 头像
 */
avatarUrl?: string;
}
/**
 * 区域启用停用
 */
export interface BarAreaEnableCmd {

/**
 * ID
 */
id: number;
/**
 * 启用停用
 */
enableStatus: boolean;
}
/**
 * 查询门店角色列表请求对象
 */
export interface ClubRolePageListQuery {

/**
 * 非必填 翻页前最后一条ID，填了后端如果支持这个字段,则可以优化查询速度
 */
lastId?: number;
/**
 * 每页条数 10
 */
pageSize?: number;
/**
 * 非必填 排序字段，填了后端如果支持这个字段,则会按这个排序 e.g. id,name,有多个则逗号分隔
 */
order?: string;
/**
 * 公司id
 */
comId?: number;
/**
 * 第几页 1
 */
pageNum?: number;
/**
 * 非必填 例子asc或desc 代表升序或者降序，默认降序
 */
sort?: string;
/**
 * 角色名称
 */
roleName?: string;
}