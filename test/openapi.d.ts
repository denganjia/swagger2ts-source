
/**
 * None Description
 */
export interface AddBannerDto {

  /**
  * 名称
  */
  name?: string;
  /**
  * 图片地址
  */
  pic?: string;
  /**
  * banner标识，用于推荐
  */
  tag?: string;
  /**
  * 跳转地址
  */
  url?: string;
}
/**
 * None Description
 */
export interface BannerDto {

  id?: string;
  /**
  * 名称
  */
  name?: string;
  /**
  * 图片地址
  */
  pic?: string;
  /**
  * banner标识，用于推荐
  */
  tag?: string;
  /**
  * 跳转地址
  */
  url?: string;
}
/**
 * None Description
 */
export interface BaseResponseDto {

  code: number;
  msg: string;
}
/**
 * None Description
 */
export interface GoodsCommentEntity {

  /**
  * 评价内容
  */
  comment: string;
  /**
  * 对应商品
  */
  goods: GoodsEntity;
  id: string;
  /**
  * 被回复
  */
  parent?: GoodsCommentEntity;
  /**
  * 回复
  */
  replies?: GoodsCommentEntity[];
  /**
  * 点赞数
  */
  star: number;
  /**
  * 评价时间
  */
  time?: string;
  /**
  * 评价用户
  */
  user: UserEntity;
}
/**
 * None Description
 */
export interface GoodsDto {

  /**
  * 商品评价
  */
  comments?: GoodsCommentEntity[];
  /**
  * 商品描述
  */
  desc?: string;
  /**
  * 商品详情
  */
  details?: string;
  id?: number;
  /**
  * 商品名称
  */
  name?: string;
  /**
  * 商品图片
  */
  pictures?: string;
  /**
  * 商品销量
  */
  sale?: number;
  /**
  * 上下架状态，1上架，0下架
  */
  sale_status?: number;
  /**
  * 商品起步价
  */
  start_price?: number;
  /**
  * 商品分类
  */
  type?: GoodsTypeEntity;
}
/**
 * None Description
 */
export interface GoodsEntity {

  /**
  * 商品评价
  */
  comments: GoodsCommentEntity[];
  /**
  * 商品描述
  */
  desc: string;
  /**
  * 商品详情
  */
  details: string;
  id: number;
  /**
  * 商品名称
  */
  name: string;
  /**
  * 商品图片
  */
  pictures: string;
  /**
  * 商品销量
  */
  sale: number;
  /**
  * 上下架状态，1上架，0下架
  */
  sale_status: number;
  /**
  * 商品起步价
  */
  start_price: number;
  /**
  * 商品分类
  */
  type: GoodsTypeEntity;
}
/**
 * None Description
 */
export interface GoodsTypeEntity {

  /**
  * 子分类
  */
  children: GoodsTypeEntity[];
  /**
  * 分类图标
  */
  icon?: string;
  id: string;
  /**
  * 分类名称
  */
  name: string;
  /**
  * 父级分类
  */
  parent: GoodsTypeEntity;
}
/**
 * None Description
 */
export interface LoginDto {

  account: string;
  password: string;
}
/**
 * None Description
 */
export interface PaginatedDto {

  datalist: object[];
  pageNum: number;
  pageSize: number;
  total: number;
}
/**
 * None Description
 */
export interface SkuAttrClassEntity {

  /**
  * sku属性
  */
  attrs: SkuAttrEntity[];
  id: number;
  /**
  * sku分类名称
  */
  name: string;
  /**
  * sku模板
  */
  temp: SkuTempEntity;
}
/**
 * None Description
 */
export interface SkuAttrEntity {

  /**
  * sku属性分类id
  */
  attr_class: SkuAttrClassEntity;
  id: number;
  /**
  * sku
  */
  sku: SkuEntity[];
  /**
  * sku属性值
  */
  value: string;
}
/**
 * None Description
 */
export interface SkuEntity {

  /**
  * sku属性id
  */
  attrs: SkuAttrEntity[];
  /**
  * 商品
  */
  goods: SysGoodsEntity;
  id: number;
  /**
  * sku名字
  */
  name: string;
  /**
  * 商品原价
  */
  original_price: number;
  /**
  * 商品现价
  */
  price: number;
  /**
  * 库存
  */
  stockQuantity: number;
}
/**
 * None Description
 */
export interface SkuTempEntity {

}
/**
 * None Description
 */
export interface SysGoodsDto {

  /**
  * 商品信息
  */
  good_info?: GoodsEntity;
  id?: string;
  /**
  * sku的id
  */
  skus?: SkuEntity[];
}
/**
 * None Description
 */
export interface SysGoodsEntity {

  /**
  * 商品信息
  */
  good_info: GoodsEntity;
  id: string;
  /**
  * sku的id
  */
  skus: SkuEntity[];
}
/**
 * None Description
 */
export interface UserDto {

  /**
  * 账号
  */
  account?: string;
  /**
  * 创建时间
  */
  createTime?: string;
  id?: string;
  /**
  * 密码
  */
  password?: string;
  /**
  * 角色
  */
  rules?: string;
  /**
  * token
  */
  token?: string;
  /**
  * 用户昵称
  */
  username?: string;
}
/**
 * None Description
 */
export interface UserEntity {

  /**
  * 班级
  */
  _class: string;
  /**
  * 头像
  */
  avatar: string;
  /**
  * 出生日期
  */
  birthday: number;
  /**
  * 城市
  */
  city: string;
  custom_permission: string;
  /**
  * 毕业年份
  */
  endYear: string;
  /**
  * 院校
  */
  faculty: string;
  /**
  * 来源
  */
  from: string;
  from_id: string;
  id: string;
  /**
  * 专业
  */
  major: string;
  /**
  * 用户昵称
  */
  nickname: string;
  /**
  * 用户openid
  */
  openid: string;
  /**
  * 密码
  */
  password: string;
  /**
  * 手机号
  */
  phone?: string;
  /**
  * 商品评价
  */
  product_comments?: GoodsCommentEntity[];
  /**
  * 省份
  */
  province: string;
  /**
  * 真实姓名
  */
  real_name: string;
  /**
  * 学校
  */
  school: string;
  /**
  * 性别
  */
  sex: object;
  sid: string;
  /**
  * 入学年份
  */
  startYear: string;
  /**
  * token
  */
  token: string;
  /**
  * 用户名
  */
  username: string;
}