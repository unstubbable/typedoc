import { Reflection } from '../../models/reflections/index';
import { ReflectionCategory } from '../../models/ReflectionCategory';
import { ConverterComponent } from '../components';
export declare class CategoryPlugin extends ConverterComponent {
    static WEIGHTS: string[];
    initialize(): void;
    private onResolve;
    private onEndResolve;
    static getReflectionCategories(reflections: Reflection[]): ReflectionCategory[];
    static getCategory(reflection: Reflection): string;
    static sortCallback(a: Reflection, b: Reflection): number;
    static sortCatCallback(a: ReflectionCategory, b: ReflectionCategory): number;
}
