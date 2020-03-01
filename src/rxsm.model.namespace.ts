import {BehaviorSubject, Subscription} from 'rxjs';

export namespace RXSMModel {
    export type SubscriptionCallback<EntityType> = (entity: EntityType) => void;
    export type RequestMatcher<InputValue, OutputValue> = (value: InputValue) => OutputValue;
    export type EntitySearcher<EntityType, QueryType extends object> = (entity: EntityType, searchQuery: QueryType) => EntityType;

    export interface IStateWatcher<EntityType> extends BehaviorSubject<EntityType> {
        get(
            searchQuery: object,
            callback: SubscriptionCallback<EntityType>,
        ): Subscription;

        set(
            entity: EntityType,
        ): Promise<void>;
    }

    export interface IAPIStateWatcher<
        EntityType,
        RequestType,
        MatchedType,
    > extends IStateWatcher<EntityType> {
        urlPattern: string;
        urlMultiplePattern: string;
        matcher: RequestMatcher<RequestType, MatchedType>;
        update(patternData: object): void;
    }
}
