import {BehaviorSubject} from 'rxjs';
import {RXSMModel} from './rxsm.model.namespace';

export namespace RXSMImpl {
    export class StateWatcher<EntityType> extends BehaviorSubject<EntityType> implements RXSMModel.IStateWatcher<EntityType> {
    }
}
