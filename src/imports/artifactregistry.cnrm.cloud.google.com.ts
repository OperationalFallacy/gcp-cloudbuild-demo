// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema ArtifactRegistryRepository
 */
export class ArtifactRegistryRepository extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ArtifactRegistryRepository"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'artifactregistry.cnrm.cloud.google.com/v1beta1',
    kind: 'ArtifactRegistryRepository',
  }

  /**
   * Renders a Kubernetes manifest for "ArtifactRegistryRepository".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ArtifactRegistryRepositoryProps): any {
    return {
      ...ArtifactRegistryRepository.GVK,
      ...toJson_ArtifactRegistryRepositoryProps(props),
    };
  }

  /**
   * Defines a "ArtifactRegistryRepository" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ArtifactRegistryRepositoryProps) {
    super(scope, id, {
      ...ArtifactRegistryRepository.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ArtifactRegistryRepository.GVK,
      ...toJson_ArtifactRegistryRepositoryProps(resolved),
    };
  }
}

/**
 * @schema ArtifactRegistryRepository
 */
export interface ArtifactRegistryRepositoryProps {
  /**
   * @schema ArtifactRegistryRepository#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ArtifactRegistryRepository#spec
   */
  readonly spec: ArtifactRegistryRepositorySpec;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositoryProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositoryProps(obj: ArtifactRegistryRepositoryProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ArtifactRegistryRepositorySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ArtifactRegistryRepositorySpec
 */
export interface ArtifactRegistryRepositorySpec {
  /**
   * The user-provided description of the repository.
   *
   * @schema ArtifactRegistryRepositorySpec#description
   */
  readonly description?: string;

  /**
   * Docker repository config contains repository level configuration for the repositories of docker type.
   *
   * @schema ArtifactRegistryRepositorySpec#dockerConfig
   */
  readonly dockerConfig?: ArtifactRegistryRepositorySpecDockerConfig;

  /**
   * Immutable. The format of packages that are stored in the repository. Supported formats
   * can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
   * You can only create alpha formats if you are a member of the
   * [alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).
   *
   * @schema ArtifactRegistryRepositorySpec#format
   */
  readonly format: string;

  /**
   * The customer managed encryption key that’s used to encrypt the
   * contents of the Repository.
   *
   * @schema ArtifactRegistryRepositorySpec#kmsKeyRef
   */
  readonly kmsKeyRef?: ArtifactRegistryRepositorySpecKmsKeyRef;

  /**
   * Immutable. The name of the location this repository is located in.
   *
   * @schema ArtifactRegistryRepositorySpec#location
   */
  readonly location: string;

  /**
   * MavenRepositoryConfig is maven related repository details.
   * Provides additional configuration details for repositories of the maven
   * format type.
   *
   * @schema ArtifactRegistryRepositorySpec#mavenConfig
   */
  readonly mavenConfig?: ArtifactRegistryRepositorySpecMavenConfig;

  /**
   * Immutable. The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].
   *
   * @schema ArtifactRegistryRepositorySpec#mode
   */
  readonly mode?: string;

  /**
   * Immutable. Configuration specific for a Remote Repository.
   *
   * @schema ArtifactRegistryRepositorySpec#remoteRepositoryConfig
   */
  readonly remoteRepositoryConfig?: ArtifactRegistryRepositorySpecRemoteRepositoryConfig;

  /**
   * Immutable. Optional. The repositoryId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ArtifactRegistryRepositorySpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Configuration specific for a Virtual Repository.
   *
   * @schema ArtifactRegistryRepositorySpec#virtualRepositoryConfig
   */
  readonly virtualRepositoryConfig?: ArtifactRegistryRepositorySpecVirtualRepositoryConfig;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpec(obj: ArtifactRegistryRepositorySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'dockerConfig': toJson_ArtifactRegistryRepositorySpecDockerConfig(obj.dockerConfig),
    'format': obj.format,
    'kmsKeyRef': toJson_ArtifactRegistryRepositorySpecKmsKeyRef(obj.kmsKeyRef),
    'location': obj.location,
    'mavenConfig': toJson_ArtifactRegistryRepositorySpecMavenConfig(obj.mavenConfig),
    'mode': obj.mode,
    'remoteRepositoryConfig': toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfig(obj.remoteRepositoryConfig),
    'resourceID': obj.resourceId,
    'virtualRepositoryConfig': toJson_ArtifactRegistryRepositorySpecVirtualRepositoryConfig(obj.virtualRepositoryConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Docker repository config contains repository level configuration for the repositories of docker type.
 *
 * @schema ArtifactRegistryRepositorySpecDockerConfig
 */
export interface ArtifactRegistryRepositorySpecDockerConfig {
  /**
   * The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
   *
   * @schema ArtifactRegistryRepositorySpecDockerConfig#immutableTags
   */
  readonly immutableTags?: boolean;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecDockerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecDockerConfig(obj: ArtifactRegistryRepositorySpecDockerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'immutableTags': obj.immutableTags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The customer managed encryption key that’s used to encrypt the
 * contents of the Repository.
 *
 * @schema ArtifactRegistryRepositorySpecKmsKeyRef
 */
export interface ArtifactRegistryRepositorySpecKmsKeyRef {
  /**
   * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
   *
   * @schema ArtifactRegistryRepositorySpecKmsKeyRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ArtifactRegistryRepositorySpecKmsKeyRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ArtifactRegistryRepositorySpecKmsKeyRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecKmsKeyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecKmsKeyRef(obj: ArtifactRegistryRepositorySpecKmsKeyRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * MavenRepositoryConfig is maven related repository details.
 * Provides additional configuration details for repositories of the maven
 * format type.
 *
 * @schema ArtifactRegistryRepositorySpecMavenConfig
 */
export interface ArtifactRegistryRepositorySpecMavenConfig {
  /**
   * Immutable. The repository with this flag will allow publishing the same
   * snapshot versions.
   *
   * @schema ArtifactRegistryRepositorySpecMavenConfig#allowSnapshotOverwrites
   */
  readonly allowSnapshotOverwrites?: boolean;

  /**
   * Immutable. Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].
   *
   * @schema ArtifactRegistryRepositorySpecMavenConfig#versionPolicy
   */
  readonly versionPolicy?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecMavenConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecMavenConfig(obj: ArtifactRegistryRepositorySpecMavenConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowSnapshotOverwrites': obj.allowSnapshotOverwrites,
    'versionPolicy': obj.versionPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Configuration specific for a Remote Repository.
 *
 * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfig
 */
export interface ArtifactRegistryRepositorySpecRemoteRepositoryConfig {
  /**
   * Immutable. The description of the remote source.
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfig#description
   */
  readonly description?: string;

  /**
   * Immutable. Specific settings for a Docker remote repository.
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfig#dockerRepository
   */
  readonly dockerRepository?: ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository;

  /**
   * Immutable. Specific settings for a Maven remote repository.
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfig#mavenRepository
   */
  readonly mavenRepository?: ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository;

  /**
   * Immutable. Specific settings for an Npm remote repository.
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfig#npmRepository
   */
  readonly npmRepository?: ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository;

  /**
   * Immutable. Specific settings for a Python remote repository.
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfig#pythonRepository
   */
  readonly pythonRepository?: ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecRemoteRepositoryConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfig(obj: ArtifactRegistryRepositorySpecRemoteRepositoryConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'dockerRepository': toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository(obj.dockerRepository),
    'mavenRepository': toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository(obj.mavenRepository),
    'npmRepository': toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository(obj.npmRepository),
    'pythonRepository': toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository(obj.pythonRepository),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration specific for a Virtual Repository.
 *
 * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfig
 */
export interface ArtifactRegistryRepositorySpecVirtualRepositoryConfig {
  /**
   * Policies that configure the upstream artifacts distributed by the Virtual
   * Repository. Upstream policies cannot be set on a standard repository.
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfig#upstreamPolicies
   */
  readonly upstreamPolicies?: ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies[];

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecVirtualRepositoryConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecVirtualRepositoryConfig(obj: ArtifactRegistryRepositorySpecVirtualRepositoryConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'upstreamPolicies': obj.upstreamPolicies?.map(y => toJson_ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Specific settings for a Docker remote repository.
 *
 * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository
 */
export interface ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository {
  /**
   * Immutable. Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository#publicRepository
   */
  readonly publicRepository?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository(obj: ArtifactRegistryRepositorySpecRemoteRepositoryConfigDockerRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publicRepository': obj.publicRepository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Specific settings for a Maven remote repository.
 *
 * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository
 */
export interface ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository {
  /**
   * Immutable. Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository#publicRepository
   */
  readonly publicRepository?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository(obj: ArtifactRegistryRepositorySpecRemoteRepositoryConfigMavenRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publicRepository': obj.publicRepository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Specific settings for an Npm remote repository.
 *
 * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository
 */
export interface ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository {
  /**
   * Immutable. Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository#publicRepository
   */
  readonly publicRepository?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository(obj: ArtifactRegistryRepositorySpecRemoteRepositoryConfigNpmRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publicRepository': obj.publicRepository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Specific settings for a Python remote repository.
 *
 * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository
 */
export interface ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository {
  /**
   * Immutable. Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].
   *
   * @schema ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository#publicRepository
   */
  readonly publicRepository?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository(obj: ArtifactRegistryRepositorySpecRemoteRepositoryConfigPythonRepository | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'publicRepository': obj.publicRepository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies
 */
export interface ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies {
  /**
   * The user-provided ID of the upstream policy.
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies#id
   */
  readonly id?: string;

  /**
   * Entries with a greater priority value take precedence in the pull order.
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies#priority
   */
  readonly priority?: number;

  /**
   * A reference to the repository resource, for example:
   * "projects/p1/locations/us-central1/repositories/repo1".
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies#repositoryRef
   */
  readonly repositoryRef?: ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies(obj: ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPolicies | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'priority': obj.priority,
    'repositoryRef': toJson_ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef(obj.repositoryRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A reference to the repository resource, for example:
 * "projects/p1/locations/us-central1/repositories/repo1".
 *
 * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef
 */
export interface ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef {
  /**
   * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef(obj: ArtifactRegistryRepositorySpecVirtualRepositoryConfigUpstreamPoliciesRepositoryRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

