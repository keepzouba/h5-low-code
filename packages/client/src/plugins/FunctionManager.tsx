import { EditorPlugins } from '@/views/editor/plugins';
import { Tracking } from './functions/Tracking';

EditorPlugins.functions.register('Tracking', Tracking);

EditorPlugins.functions.addToGroup('埋点', ['Tracking']);
