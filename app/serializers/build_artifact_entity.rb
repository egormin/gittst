class BuildArtifactEntity < Grape::Entity
  include RequestAwareEntity

  expose :name do |job|
    job.name
  end

  expose :artifacts_expired?, as: :expired
  expose :artifacts_expire_at, as: :expire_at

  expose :path do |job|
    download_namespace_project_job_artifacts_path(
      project.namespace,
      project,
      job)
  end

  expose :keep_path, if: -> (*) { job.has_expiring_artifacts? } do |job|
    keep_namespace_project_job_artifacts_path(
      project.namespace,
      project,
      job)
  end

  expose :browse_path do |job|
    browse_namespace_project_job_artifacts_path(
      project.namespace,
      project,
      job)
  end

  private

  alias_method :job, :object

  def project
    job.project
  end
end
