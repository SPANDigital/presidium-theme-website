{{- $employees := slice -}}

{{- range $key, $value := $.Site.Data.employees -}}
  {{ range $employee := $value -}}
    {{ $employees = $employees | append $employee -}}
  {{ end -}}
{{ end -}}


{{- range $employee := $employees }}

Meet {{ .first_name }} {{ .middle_name }} {{ .last_name }}, a member of the SPAN team with the employee ID {{ .employee_id }}. Currently, {{ .first_name }} holds the position of {{ .designation }} and is employed with us on a {{ .employee_type }} basis. If you wish to reach out, you can contact {{ .first_name }} at their official Span email: {{ .official_email }} or their personal email: {{ .personal_email }}. {{ .first_name }} began their journey with Span on {{ .joining_date }} and has been contributing to the {{ .territory }} territory. All of {{ .first_name }}'s efforts are overseen by {{ .reporting_to }}.

---

{{ end }}
