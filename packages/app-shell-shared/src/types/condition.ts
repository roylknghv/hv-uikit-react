import { IAsyncResult } from "@hitachivantara/app-shell-services";

export type UseConditionResult = IAsyncResult<boolean, Error, "result">;

export type UseCondition = () => UseConditionResult;
