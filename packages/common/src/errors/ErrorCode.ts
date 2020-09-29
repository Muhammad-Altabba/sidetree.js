/*
 * The code in this file originated from
 * @see https://github.com/decentralized-identity/sidetree
 * For the list of changes that was made to the original code
 * @see https://github.com/transmute-industries/sidetree.js/blob/master/reference-implementation-changes.md
 *
 * Copyright 2020 - Transmute Industries Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Error codes used ONLY by this version of the protocol.
 */
export default {
  AnchoredDataIncorrectFormat: 'anchored_data_incorrect_format',
  AnchoredDataNumberOfOperationsGreaterThanMax:
    'anchored_data_number_of_operations_greater_than_max',
  AnchoredDataNumberOfOperationsNotPositiveInteger:
    'anchored_data_number_of_operations_not_positive_integer',
  AnchorFileCreatePropertyNotArray: 'anchor_file_create_property_not_array',
  AnchorFileDecompressionFailure: 'anchor_file_decompression_failed',
  AnchorFileHasUnknownProperty: 'anchor_file_has_unknown_property',
  AnchorFileMapFileHashMissing: 'anchor_file_map_file_hash_missing',
  AnchorFileMapFileHashNotString: 'anchor_file_map_file_hash_not_string',
  AnchorFileMapFileHashUnsupported: 'anchor_file_map_file_hash_unsupported',
  AnchorFileMissingOperationsProperty:
    'anchor_file_did_unique_suffixes_missing',
  AnchorFileMultipleOperationsForTheSameDid:
    'anchor_file_multiple_operations_for_the_same_did',
  AnchorFileNotJson: 'anchor_file_not_json',
  AnchorFileOperationCountExceededPaidLimit:
    'anchor_file_operation_count_exceeded_paid_limit',
  AnchorFileRecoverPropertyNotArray: 'anchor_file_recover_property_not_array',
  AnchorFileDeactivatePropertyNotArray:
    'anchor_file_deactivate_property_not_array',
  AnchorFileUnexpectedPropertyInOperations:
    'anchor_file_unexpected_property_in_operations',
  AnchorFileWriterLockIPropertyNotString:
    'anchor_file_writer_lock_id_property_not_string',
  BatchWriterAlreadyHasOperationForDid:
    'batch_writer_already_has_operation_for_did',
  CasFileHashNotValid: 'cas_file_hash_not_valid',
  CasFileNotAFile: 'cas_file_not_a file',
  CasFileNotFound: 'cas_file_not_found',
  CasFileTooLarge: 'cas_file_too_large',
  CasNotReachable: 'cas_not_reachable',
  ChunkFileDeltaSizeExceedsLimit: 'chunk_file_delta_size_exceeds_limit',
  ChunkFileDeltasNotArrayOfStrings: 'chunk_file_deltas_not_array_of_string',
  ChunkFileDeltasPropertyNotArray: 'chunk_file_deltas_property_not_array',
  ChunkFileUnexpectedProperty: 'chunk_file_unexpected_property',
  CreateOperationMissingOrUnknownProperty:
    'create_operation_missing_or_unknown_property',
  CreateOperationSuffixDataMissingOrNotString:
    'create_operation_suffix_data_missing_or_not_string',
  CreateOperationSuffixDataMissingOrUnknownProperty:
    'create_operation_suffix_data_missing_or_unknown_property',
  CreateOperationTypeIncorrect: 'create_operation_type_incorrect',
  DeltaMissingOrNotString: 'delta_missting_or_not_string',
  DeltaMissingOrUnknownProperty: 'delta_missing_or_unknown_property',
  DidIncorrectPrefix: 'did_incorrect_prefix',
  DidInitialStateValueContainsMoreThanOneDot:
    'did_initial_state_value_contains_more_than_one_dot',
  DidInitialStateValueContainsNoDot: 'did_initial_state_value_contains_no_dot',
  DidInitialStateValueDoesNotContainTwoParts:
    'did_initial_state_value_does_not_contain_two_parts',
  DidInvalidDidString: 'did_invalid_did_string',
  DidLongFormNoInitialStateFound: 'did_long_form_no_initial_state_found',
  DidLongFormOnlyInitialStateParameterIsAllowed:
    'did_long_form_only_initial_values_parameter_is_allowed',
  DidLongFormOnlyOneQueryParamAllowed:
    'did_long_form_only_one_query_param_allowed',
  DidNoUniqueSuffix: 'did_no_unique_suffix',
  DidUniqueSuffixFromInitialStateMismatch:
    'did_unique_suffix_from_initial_state_mismatch',
  DocumentComposerDocumentMissing: 'document_composer_document_missing',
  DocumentComposerIdNotString: 'document_composer_id_not_string',
  DocumentComposerIdNotUsingBase64UrlCharacterSet:
    'document_composer_id_not_using_base_64_url_character_set',
  DocumentComposerIdTooLong: 'document_composer_id_too_long',
  DocumentComposerInvalidSignature: 'document_composer_invalid_signature',
  DocumentComposerPatchMissingOrUnknownAction:
    'document_composer_patch_missing_or_unknown_action',
  DocumentComposerPatchMissingOrUnknownProperty:
    'document_composer_patch_missing_or_unknown_property',
  DocumentComposerPatchPublicKeyIdNotString:
    'document_composer_patch_public_key_id_not_string',
  DocumentComposerPatchPublicKeyIdsNotArray:
    'document_composer_patch_public_keys_ids_not_array',
  DocumentComposerPatchServiceEndpointNotString:
    'document_composer_patch_service_endpoint_not_string',
  DocumentComposerPatchServiceEndpointsNotArray:
    'document_composer_patch_service_endpoints_not_array',
  DocumentComposerPatchServiceTypeMissingOrUnknown:
    'document_composer_patch_service_type_missing_or_unknown',
  DocumentComposerPublicKeyIdDuplicated:
    'document_composer_public_key_id_duplicated',
  DocumentComposerPublicKeyJwkMissingOrIncorrectType:
    'document_composer_public_key_jwk_missing_or_incorrect_type',
  DocumentComposerPublicKeyMissingOrUnknownProperty:
    'document_composer_public_key_missing_or_unknown_property',
  DocumentComposerPublicKeysNotArray: 'document_composer_public_keys_not_array',
  DocumentComposerPublicKeyTypeMissingOrIncorrectType:
    'document_composer_public_key_type_missing_or_incorrect_type',
  DocumentComposerPublicKeyPurposeMissingOrUnknown:
    'document_composer_public_key_purpose_missing_or_unknown',
  DocumentComposerPublicKeyPurposeExceedsMaxLength:
    'document_composer_public_key_purpose_exceeds_max_length',
  DocumentComposerPublicKeyInvalidPurpose:
    'document_composer_public_key_invalid_purpose',
  DocumentComposerPatchServiceEndpointIdsNotArray:
    'document_composer_service_endpoint_ids_not_array',
  DocumentComposerPatchServiceEndpointServiceEndpointNotString:
    'document_composer_service_endpoint_service_endpoint_not_string',
  DocumentComposerPatchServiceEndpointServiceEndpointNotValidUrl:
    'document_composer_service_endpoint_service_endpoint_not_valid_url',
  DocumentComposerPatchServiceEndpointServiceEndpointTooLong:
    'document_composer_service_endpoint_service_endpoint_too_long',
  DocumentComposerPatchServiceEndpointTypeNotString:
    'document_composer_service_endpoint_type_not_string',
  DocumentComposerPatchServiceEndpointTypeTooLong:
    'document_composer_service_endpoint_type_too_long',
  DocumentComposerServiceEndpointMissingOrUnknownProperty:
    'document_composer_service_endpoint_missing_or_unknown_property',
  DocumentComposerServiceNotArray: 'document_composer_service_not_array',
  DocumentComposerUnknownPropertyInDocument:
    'document_composer_unknown_property_in_document',
  DocumentComposerUpdateOperationDocumentPatchesNotArray:
    'document_composer_update_operation_document_patch_not_array',
  DocumentIncorretEncodedFormat: 'document_incorrect_encoded_format',
  DocumentNotJson: 'document_not_json',
  DocumentNotValidOriginalDocument: 'document_not_valid_original_document',
  EncoderValidateBase64UrlStringInputNotBase64UrlString:
    'encoder_validate_base64url_string_input_not_base64url_string',
  EncoderValidateBase64UrlStringInputNotString:
    'encoder_validate_base64url_string_input_not_string',
  JwkHasUnknownProperty: 'jwk_has_unknown_property',
  JwkMissingOrInvalidCrv: 'jwk_missing_or_invalid_crv',
  JwkMissingOrInvalidKty: 'jwk_missing_or_invalid_kty',
  JwkMissingOrInvalidTypeX: 'jwk_missing_or_invalid_type_x',
  JwkMissingOrInvalidTypeY: 'jwk_missing_or_invalid_type_y',
  JwkUndefined: 'jwk_undefined',
  JwsCompactJwsInvalid: 'jws_compact_jws_invalid',
  JwsCompactJwsNotString: 'jws_compact_jws_not_string',
  JwsFailedSignatureValidation: 'jws_failed_signature_validation',
  JwsPayloadNotBase64UrlString: 'jws_payload_not_base64url_string',
  JwsProtectedHeaderMissingOrIncorrectAlg:
    'jws_protected_header_missing_or_incorrect_alg',
  JwsProtectedHeaderMissingOrUnknownProperty:
    'jws_protected_header_missing_or_unknown_property',
  JwsSignatureNotBase64UrlString: 'jws_signature_not_base64url_string',
  MapFileChunkHasMissingOrUnknownProperty:
    'map_file_chunk_has_missing_or_unknown_property',
  MapFileChunksPropertyDoesNotHaveExactlyOneElement:
    'map_file_chunks_property_does_not_have_exactly_one_element',
  MapFileChunksPropertyMissingOrIncorrectType:
    'map_file_chunks_property_missing_or_incorrect_type',
  MapFileDecompressionFailure: 'map_file_decompression_failure',
  MapFileHasUnknownProperty: 'map_file_has_unknown_property',
  MapFileMultipleOperationsForTheSameDid:
    'map_file_multiple_operations_for_the_same_did',
  MapFileNotJson: 'map_file_not_json',
  MapFileOperationsPropertyHasMissingOrUnknownProperty:
    'map_file_operations_property_has_missing_or_unknown_property',
  MapFileUpdateOperationsNotArray: 'map_file_update_operations_not_array',
  MultihashNotLatestSupportedHashAlgorithm:
    'multihash_not_latest_supported_hash_algorithm',
  MultihashUnsupportedHashAlgorithm: 'multihash_unsupported_hash_algorithm',
  OperationCreateInvalidDidDocument: 'operation_create_invalid_did_document',
  OperationCountLessThanZero: 'operation_count_less_than_zero',
  OperationCreatePayloadHasMissingOrInvalidNextRecoveryCommitment:
    'operation_create_payload_has_missing_or_invalid_next_recovery_commitment',
  OperationCreatePayloadHasMissingOrInvalidNextUpdateCommitment:
    'operation_create_payload_has_missing_or_invalid_next_update_commitment',
  OperationCreatePayloadMissingOrUnknownProperty:
    'operation_create_payload_missing_or_unknown_property',
  OperationDocumentPatchesMissing: 'operation_document_patches_missing',
  OperationPayloadMissingOrIncorrectType:
    'operation_payload_missing_or_incorrect_type',
  OperationProcessorCreateOperationDoesNotHaveRevealValue:
    'operation_processor_create_operation_does_not_have_reveal_value',
  OperationProcessorUnknownOperationType:
    'operation_processor_unknown_operation_type',
  OperationTypeUnknownOrMissing: 'operation_type_unknown_or_missing',
  QueueingMultipleOperationsPerDidNotAllowed:
    'queueing_multiple_operations_per_did_not_allowed',
  RecoverOperationMissingOrInvalidDidUniqueSuffix:
    'recover_operation_missing_or_invalid_did_unique_suffix',
  RecoverOperationMissingOrUnknownProperty:
    'recover_operation_missing_or_unknown_property',
  RecoverOperationSignedDataMissingOrUnknownProperty:
    'recover_operation_signed_data_missing_or_unknown_property',
  RecoverOperationTypeIncorrect: 'recover_operation_type_incorrect',
  RequestHandlerDeltaExceedsMaximumSize:
    'request_handler_patch_data_exceeds_maximum_size',
  RequestHandlerUnknownOperationType: 'request_handler_unknown_operation_type',
  DeactivateOperationMissingOrInvalidDidUniqueSuffix:
    'deactivate_operation_missing_or_invalid_did_unique_suffix',
  DeactivateOperationMissingOrUnknownProperty:
    'deactivate_operation_missing_or_unknown_property',
  DeactivateOperationSignedDataMissingOrUnknownProperty:
    'deactivate_operation_signed_data_missing_or_unknown_property',
  DeactivateOperationSignedDidUniqueSuffixMismatch:
    'deactivate_operation_signed_did_unique_suffix_mismatch',
  DeactivateOperationTypeIncorrect: 'deactivate_operation_type_incorrect',
  TransactionFeePaidInvalid: 'transaction_fee_paid_is_invalid',
  TransactionFeePaidLessThanNormalizedFee:
    'transaction_fee_paid_less_than_normalized_fee',
  TransactionProcessorPaidOperationCountExceedsLimit:
    'transaction_processor_paid_operation_count_exceeds_limit',
  TransactionsNotInSameBlock: 'transactions_not_in_same_block',
  UpdateOperationMissingDidUniqueSuffix:
    'update_operation_missing_did_unique_suffix',
  UpdateOperationMissingOrUnknownProperty:
    'update_operation_missing_or_unknown_property',
  UpdateOperationSignedDataHasMissingOrUnknownProperty:
    'update_operation_signed_data_has_missing_or_unknown_property',
  UpdateOperationTypeIncorrect: 'update_operation_type_incorrect',
  ValueTimeLockVerifierInvalidNumberOfOperations:
    'value_time_lock_verifierInvalid_number_of_operations',
  ValueTimeLockVerifierTransactionTimeOutsideLockRange:
    'value_time_lock_verifiertarget_transaction_time_outside_lock_range',
  ValueTimeLockVerifierTransactionWriterLockOwnerMismatch:
    'value_time_lock_verifiertransaction_owner_lock_writer_mismatch',
};
