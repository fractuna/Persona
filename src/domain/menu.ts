import { createContext, type Context } from "react";

// TODO: Add type instead of using `any`
export const ViewContent: Context<any> = createContext(undefined);

export type Content = {
	name: string;
	ref_component: any;
}
