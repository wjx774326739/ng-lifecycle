# NgLifecycle
## 说明
- 测试Angular中各类元数据的生命周期。
- demo:https://wjx774326739.github.io/ng-lifecycle/

## 运行
- 启动：`npm start`；
- 打包: `npm run build`

## 结论
### NgModule模块
- 只会初始化一次。不会随着路由的切换而销毁或者重新初始化；
- 被引入的NgModule，会随着所在的NgModule一起初始化，会在所在NgModule初始化之前被初始化。同样也只会被初始化一次。
- 同一个NgModule，在不同NgModule中被引入，实例是不同的。

### Component组件
- ngOnChanges,ngOnInit,ngDoCheck,ngAfterContentInit,ngAfterContentDoChecked,ngAfterViewInit,ngAfterViewDoChecked,ngOnDestroy.
- 详情见官方教程

### Directive指令
- ngOnChanges,ngOnInit,ngDoCheck,ngAfterContentInit,ngAfterContentDoChecked,ngAfterViewInit,ngAfterViewDoChecked,ngOnDestroy.
- 详情见官方教程

### Service服务
- 不管是通过`@Injectable({providedIn: 'root'})`还是通过`NgModule.providers`注册服务，都只会在第一次用到的时候才会初始化；
- 懒加载模块中，通过`NgModule.providers`注册的服务，并不会随着路由切换至其它模块导致服务实例销毁，且再随着路由切换至该模块而重新初始化。在整个项目周期中只有当使用到时，才会初始化一次。虽然它的作用域仅限于当前模块；这与NgModule的初始化保持一致；
- 通过`Component.providers`注册的服务，是随着组件的创建和初始化、随着组件的销毁而销毁。这与该服务实例的作用域仅限于当前组件以及子组件的效果相吻合；
- 引入的模块中，通过`NgModule.providers`注册的服务,生命周期跟所在的模块的生命周期一样，不同模块之间的服务实例是不同的。
- 服务被销毁时，会执行ngOnDestroy生命周期钩子；

### Pipe管道
- 每用一次管道，都会初始化一个新的管道实例。
- 所在组件销毁时，也会被跟着销毁。销毁时会触发ngOnDestroy生命周期钩子;
- 管道除了ngOnDestroy生命周期钩子之外，没有其它的官方声明周期钩子，比如ngOnInit之类的；
- 管道实例是不可共用的，跟组件、指令类似。

