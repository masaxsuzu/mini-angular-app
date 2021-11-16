import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";


export interface AppCatalog {
    routerLink: string,
    displayName: string,
}

export class Register {
    static readonly type = '[AppRegistry] Register';
    constructor(public app: AppCatalog) {}
}

export interface AppRegistryStateModel {
    apps: AppCatalog[],
}

@State<AppRegistryStateModel>({
    name: 'appRegistry',
    defaults: {
        apps: [],
    }
})
@Injectable()
export class AppRegistryState {
    @Selector()
    public static onApplicationUpdated(state: AppRegistryStateModel) {
        return state.apps;
    }

    @Action(Register)
    registerApp(ctx: StateContext<AppRegistryStateModel>, action : Register) {
        const s = ctx.getState();
        let x = [...s.apps];
        x.push(action.app);
        ctx.setState({
            ...s,
            apps: x,
        });
    }
}
