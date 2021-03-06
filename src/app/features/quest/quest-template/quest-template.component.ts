import { Component } from '@angular/core';

import { SingleRowEditorComponent } from '@keira-abstract/components/editors/single-row-editor.component';
import { QuestTemplate } from '@keira-types/quest-template.type';
import { QuestTemplateService } from './quest-template.service';
import { QuestHandlerService } from '../quest-handler.service';
import { ALLOWABLE_RACES } from '@keira-constants/flags/allowable-races';
import { QUEST_FLAGS } from '@keira-constants/flags/quest-flags';
import { QUEST_TYPE } from '@keira-constants/options/quest-type';
import { QuestPreviewService } from '../quest-preview/quest-preview.service';

@Component({
  selector: 'keira-quest-template',
  templateUrl: './quest-template.component.html',
  styleUrls: ['./quest-template.component.scss']
})
export class QuestTemplateComponent extends SingleRowEditorComponent<QuestTemplate> {

  public readonly QUEST_FLAGS = QUEST_FLAGS;
  public readonly QUEST_TYPE = QUEST_TYPE;
  public readonly ALLOWABLE_RACES = ALLOWABLE_RACES;

  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    public editorService: QuestTemplateService,
    public handlerService: QuestHandlerService,
    public readonly questPreviewService: QuestPreviewService,
  ) {
    super(editorService, handlerService);
  }
}
